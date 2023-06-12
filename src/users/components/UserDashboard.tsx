import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { User } from "../store/user-state";
import { RootState } from "../../store/store";
import { selectUser, selectUsers } from "../store/selectors";
import { useEffect } from "react";
import { getUser, loadUsersInit } from "../store/actions";
import keycloak from '../../keycloak';
import './user-dashboard.scss';
import PMNavbar from '../../shared/sidebar/PMNavbar';

function UserDashboard() {

    const dispatch = useDispatch();

    // const users: User[] = useSelector(
    //     (state:RootState) => selectUsers(state)
    // )
    const [userKeycloakId,] = useState(localStorage.getItem("userKeycloakId"))
    const user: User | null = useSelector((state: RootState) => selectUser(state, keycloak.getAuth() ? keycloak.getParsedToken()?.sub as string : ""))
    console.log(user)
    console.log(keycloak.getToken())

    // useEffect(() => {
    //     dispatch(loadUsersInit());
    // }, [dispatch])

    useEffect(() => {
        console.log(keycloak.getAuth())
        if(keycloak.getAuth())
            dispatch(getUser(keycloak.getParsedToken()?.sub as string));
    }, [dispatch])

    return (
        <div className='user-dashboard'>
            <PMNavbar />
            {keycloak.getAuth() && user !== null ?
               <div><h1>{user.name}</h1>
               <h2>{user.email}</h2></div>
            : "Loading"}
        </div>
    )
}

export default UserDashboard;