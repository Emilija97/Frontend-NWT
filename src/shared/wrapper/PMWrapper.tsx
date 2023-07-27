import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { User } from "../../users/store/user-state";
import { RootState } from "../../store/store";
import { selectUser, selectUsers } from "../../users/store/selectors";
import { useEffect } from "react";
import { getUser, loadUsersInit } from "../../users/store/actions";
import keycloak from '../../keycloak';
import './pm-wrapper.scss';
import PMNavbar from '../navbar/PMNavbar';
import UserDashboard from '../../users/components/UserDashboard';
import Projects from '../../projects/components/Projects';
import Tasks from '../../tasks/Tasks';
import Settings from '../../settings/Settings';

enum PMView {
    USER_DASHBOARD = 0,
    PROJECTS = 1,
    TASKS = 2,
    SETTINGS = 3
}

function PMWrapper() {

    const dispatch = useDispatch();
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    // const [userKeycloakId,] = useState(localStorage.getItem("userKeycloakId"))
    // const user: User | null = useSelector((state: RootState) => selectUser(state, keycloak.getAuth() ? keycloak.getParsedToken()?.sub as string : ""))
    // console.log(user)
    // console.log(keycloak.getToken())

    // // useEffect(() => {
    // //     dispatch(loadUsersInit());
    // // }, [dispatch])

    // useEffect(() => {
    //     console.log(keycloak.getAuth())
    //     if(keycloak.getAuth())
    //         dispatch(getUser(keycloak.getParsedToken()?.sub as string));
    // }, [dispatch]) 

    const onTabChange = (tabValue: any) => {
        setSelectedTab(tabValue);
    }

    const renderSelectedTab = () => {
        console.log(selectedTab)
        if (selectedTab === PMView.USER_DASHBOARD) return <UserDashboard />;
        else if (selectedTab === PMView.PROJECTS) return <Projects />;
        else if (selectedTab === PMView.TASKS) return <Tasks />
        else return <Settings />;
    }

    return (
        <div className={`pm-wrapper${navbarCollapsed ? `__collapsed` : `__not-collapsed`}`}>
            <PMNavbar collapsed={navbarCollapsed} setCollapsed={setNavbarCollapsed} setTab={onTabChange} />
            {/* <div className='user-dashboard'>
            {keycloak.getAuth() && user !== null ?
               <div className='user-dashboard__info'><h1>{user.name}</h1>
               <h2>{user.email}</h2></div>
            : "Loading"}
        </div> */}
            {console.log(selectedTab)}
            {renderSelectedTab()}
        </div>
    )
}

export default PMWrapper;