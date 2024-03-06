import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import React from 'react';
import PrivateRoute from './PrivateRoute';

let AllRoutes: React.FC = () => {
        return(
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default AllRoutes;