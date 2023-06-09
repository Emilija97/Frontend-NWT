import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import UserDashboard from "../users/components/UserDashboard"
import HomePage from '../home/HomePage';


function DefinedRoutes() {
    
    const userRoutes = () => {
        return (
            // <BrowserRouter>
                <Routes>
                    <Route path="/users" element={<UserDashboard/>}></Route>
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