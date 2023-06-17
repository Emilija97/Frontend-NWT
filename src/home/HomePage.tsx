import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser, loadUsersInit } from "../users/store/actions";
import PMHeader from "../shared/header/PMHeader";
import './home-page.scss'

function HomePage() {
  const dispatch = useDispatch();
  const [userKeycloakId,] = useState(localStorage.getItem("userKeycloakId"))
  const [username,] = useState(localStorage.getItem("username"))
  // const user = useSelector((state: RootState) => selectUser(state, userKeycloakId ? userKeycloakId : ""))
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getUser(userKeycloakId as string));
    navigate("/dashboard")
  }

    
  // console.log(keycloak.getToken())

  // useEffect(() => {
  //   console.log(userKeycloakId)
  //   console.log(keycloak.getToken())
  //   // if(keycloak.getToken() != undefined && userKeycloakId != null)
  //     dispatch(getUser(userKeycloakId as string));
  // }, [dispatch, keycloak.getAuth()])

  return (
    <div className="home-page">
      <PMHeader backArrow={false} logout={true} logo={true} title="EMILY - Project Management" />
      <div className="home-page__body">
        <div className="home-page__body-title">Welcome to the Project Management Dashboard! </div>
        <div className="home-page__welcome-text">
        “A goal without a plan is just a wish.”
        <p>
        — Antoine de Saint-Exupéry
        </p>
        </div>
        <div className="home-page__auth">
          <button onClick={handleClick} className="pm-button pm-button--medium pm-button--full-width
              pm-button__contained pm-button__contained--primary">Go on Agile Board</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;