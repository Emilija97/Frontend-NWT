import React, { useEffect, useState } from "react";
import { Roles, User, rolesArray, rolesMap, rolesMapByNumber } from "../store/user-state";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectUser } from "../store/selectors";
import keycloak from '../../keycloak';
import { getUser } from "../store/actions";
import "../styles/user-dashboard.scss";
import PMHeader from "../../shared/header/PMHeader";
import PMTitle from "../../shared/title/PMTitle";
import { selectTeams } from "../../teams/store/selectors";
import { Team } from "../../teams/store/team-state";
import { loadTeamsInit } from "../../teams/store/actions";

function UserDashboard() {

    const dispatch = useDispatch();
    const [userKeycloakId,] = useState(localStorage.getItem("userKeycloakId"))
    const user: User | null = useSelector((state: RootState) => selectUser(state, keycloak.getAuth() ? keycloak.getParsedToken()?.sub as string : ""))
    const teams: Team[] = useSelector((state: RootState) => selectTeams(state))
    console.log(user)
    console.log(keycloak.getToken())

    // useEffect(() => {
    //     dispatch(loadUsersInit());
    // }, [dispatch])

    useEffect(() => {
        console.log(keycloak.getAuth())
        if(keycloak.getAuth()) {
            dispatch(getUser(keycloak.getParsedToken()?.sub as string));
            dispatch(loadTeamsInit())
        }
    }, [dispatch])

    return (
        <div className='pm-user-dashboard'>
        {keycloak.getAuth() && user !== null ?
            (
            <div className="pm-user-dashboard__body">
                <PMHeader backArrow={false} logout={false} logo={false} title="User Dashboard" className="pm-header__title--large"/>
                <PMTitle name={user.name}/>

                <div className="pm-user-dashboard__roles">
                    <div className="pm-user-dashboard__assigned-roles">
                        <div className="pm-user-dashboard__title">Roles Assigned By User</div>
                        <ul className="pm-user-dashboard__roles-items">
                            {user.roles.map((item, index) => {
                            return (
                                <li key={index} className="pm-user-dashboard__nav-text">
                                    <div className="pm-user-dashboard__role">{rolesMapByNumber.get(item)}</div>
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                    <div className="pm-user-dashboard__available-roles">
                        <div className="pm-user-dashboard__title">List of Available Roles</div>
                        <ul className="pm-user-dashboard__roles-items">
                            {rolesArray.map((item, index) => {
                            return (
                                <li key={index} className="pm-user-dashboard__nav-text">
                                    <div className="pm-user-dashboard__role">{rolesMapByNumber.get(item)}</div>
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="pm-user-dashboard__table">
                    <div className="pm-user-dashboard__personal-info">
                        <div className="pm-user-dashboard__title">Personal Information</div>
                        <div className="pm-user-dashboard__info">
                            <div className="pm-user-dashboard__info-pair">
                                <div className="pm-user-dashboard__info-pair--property">Username: </div>
                                <div className="pm-user-dashboard__info-pair--value">{user.username}</div>
                            </div>
                            <div className="pm-user-dashboard__info-pair">
                                <div className="pm-user-dashboard__info-pair--property">Organization: </div>
                                <div className="pm-user-dashboard__info-pair--value">{user.organizationName}</div>
                            </div>
                            <div className="pm-user-dashboard__info-pair">
                                <div className="pm-user-dashboard__info-pair--property">Email: </div>
                                <div className="pm-user-dashboard__info-pair--value">{user.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="pm-user-dashboard__user-info">
                        <div className="pm-user-dashboard__team-dash">
                            <div className="pm-user-dashboard__title">Teams</div>
                            {teams.length !== 0 ? 
                                (
                                    <ul className="pm-user-dashboard__team-items">
                                    {teams.map((item, index) => {
                                    return (
                                        <li key={index} className="pm-user-dashboard__nav-text">
                                            <div className="pm-user-dashboard__team">{item.name}</div>
                                        </li>
                                    );
                                    })}
                            </ul>
                                )
                            : "There is no team"}
                        </div>

                        <div className="pm-user-dashboard__project-dash">
                            <div className="pm-user-dashboard__title">Projects</div>
                            {teams.length !== 0 ? 
                                (
                                    <ul className="pm-user-dashboard__project-items">
                                    {teams.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="pm-user-dashboard__project">
                                                    <div className="pm-user-dashboard__project--property">Team: </div>
                                                    <div className="pm-user-dashboard__project--value">{item.name}</div>
                                                </div>
                                            {item.projectNames.map((project, projectIndex) => {
                                                return(
                                                    <li key={projectIndex} className="pm-user-dashboard__nav-text">
                                                        <div className="pm-user-dashboard__project--sub-text">{project}</div>
                                                    </li>
                                                )
                                            })}
                                        </li>)
                                    })}
                            </ul>
                                )
                            : "There is no team"}
                        </div>
                    </div>
                </div>
            </div>
            )
            : ("Loading")}
        </div>
    )
}

export default UserDashboard;