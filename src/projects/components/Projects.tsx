import React, { useEffect, useState } from "react";
import "../styles/projects.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Project, statusMap } from "../store/project-state";
import { selectProject, selectProjectByName, selectProjects } from "../store/selectors";
import keycloak from "../../keycloak";
import { loadProjectsInit } from "../store/actions";
import PMHeader from "../../shared/header/PMHeader";
import { User } from "../../users/store/user-state";
import { selectUser, selectUserById } from "../../users/store/selectors";
import { findUser, getUser } from "../../users/store/actions";
import PMExpandableMenu from "../../shared/expandable-menu/PMExpandableMenu";
import { AddImage } from "../../assets";
import PieChart from "./PieChart";
import { getTeam } from "../../teams/store/actions";
import { Team } from "../../teams/store/team-state";
import { selectTeam } from "../../teams/store/selectors";

function Projects() {

    const dispatch = useDispatch();
    const projects: Project[] = useSelector((state: RootState) => selectProjects(state))
    const [userKeycloakId,] = useState(localStorage.getItem("userKeycloakId"))
    const user: User | null = useSelector((state: RootState) => selectUser(state, keycloak.getAuth() ? keycloak.getParsedToken()?.sub as string : ""))
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedName, setSelectedName] = useState(projects.length !== 0 ? projects[0].name : "Select Project Name");
    const selectedProject: Project | null = useSelector((state: RootState) => selectProjectByName(state, selectedName))
    const projectOwner: User | null = useSelector((state: RootState) => selectUserById(state, selectedProject !== null ? selectedProject.projectOwnerId : ""))
    const team: Team | null = useSelector((state: RootState) => selectTeam(state, selectedProject !== null ? selectedProject.teamId : ""))

    useEffect(() => {
        console.log(keycloak.getAuth())
        if (keycloak.getAuth()) {
            dispatch(getUser(keycloak.getParsedToken()?.sub as string));
            dispatch(loadProjectsInit())
        }
    }, [dispatch])

    const onProjectNameChange = (name: string) => {
        setIsExpanded(false);
        setSelectedName(name);
    };

    useEffect(() => {
        if (selectedProject !== null) {
            dispatch(findUser(selectedProject.projectOwnerId))
            dispatch(getTeam(selectedProject.teamId))
        }
    }, [selectedProject, dispatch])



    const dataPie = {
        labels: ['Budget', 'Spent Money'],
        data: [selectedProject?.budget, selectedProject?.spentMoney],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
    };


    return (
        <div className="pm-projects">
            {keycloak.getAuth() && user !== null ?
                (
                    <div className="pm-projects__body">
                        <div className="pm-projects__header">
                            <div className="pm-projects__navigation">
                                <div className="projects__navigation--text">PROJECT:</div>
                                {projects.length !== 0 ?
                                    (
                                        <PMExpandableMenu
                                            chosenProject={projects[0].name}
                                            projects={projects.map(project => project.name)}
                                            expanded={isExpanded} selectedName={selectedName}
                                            setExpanded={setIsExpanded}
                                            setProjectName={onProjectNameChange} />) :
                                    (<div></div>)}
                            </div>

                            <div className="pm-projects__add">
                                <button className="pm-projects__member">
                                    <img alt="Add" src={AddImage} className='pm-projects__add-icon' ></img>
                                    Add Member
                                </button>
                            </div>
                        </div>
                        {selectedProject !== null ?
                            <div className="pm-projects__project-info">
                                <div className="pm-projects__title">{selectedProject.name}</div>
                                <div className="pm-projects__description">
                                    <div className="pm-projects__info">
                                        {projectOwner ?
                                            <div className="pm-projects__info-row">
                                                <p className="pm-projects__info-key">Project Owner:</p>
                                                <p className="pm-projects__info-value">{projectOwner.name}</p>
                                            </div> : ""}
                                        {team ?
                                            <div className="pm-projects__info-row">
                                                <p className="pm-projects__info-key">Team:</p>
                                                <p className="pm-projects__info-value">{team.name}</p>
                                            </div> : ""}
                                        <div className="pm-projects__info-row">
                                            <p className="pm-projects__info-key">Description:</p>
                                            <p className="pm-projects__info-value">{selectedProject.description}</p>
                                        </div>
                                        <div className="pm-projects__info-row">
                                            <p className="pm-projects__info-key">Status:</p>
                                            <p className="pm-projects__info-value">{statusMap.get(selectedProject.status)}</p>
                                        </div>
                                    </div>
                                    <div className="pm-projects__chart-container">
                                        <PieChart
                                            labels={['Budget', 'Spent Money']}
                                            data={[selectedProject?.budget, selectedProject?.spentMoney]}
                                            backgroundColor={['#34a49c', '#a4343c']}
                                            hoverBackgroundColor={['#34a49c', '#a4343c']}
                                        />
                                    </div>
                                </div>
                            </div>
                            : <div></div>}
                    </div>
                )
                : ("Loading")}
        </div>
    )
}

export default Projects;
