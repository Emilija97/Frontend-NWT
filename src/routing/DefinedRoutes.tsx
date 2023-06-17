import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import UserDashboard from "../shared/wrapper/PMWrapper"
import HomePage from '../home/HomePage';
import PMWrapper from '../shared/wrapper/PMWrapper';


function DefinedRoutes() {
    
    const userRoutes = () => {
        return (
            // <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<PMWrapper/>}></Route>
                </Routes>
            // </BrowserRouter>
        )
    }

    return (
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />}></Route>
            </Routes>
            {userRoutes()}
        </Router>
    )
}

export default DefinedRoutes;