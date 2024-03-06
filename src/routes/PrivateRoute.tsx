import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type PrivateRouteProps = {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    //If Not Authenticated
    let auth='false';
    let location= useLocation();
    let path=location.pathname;

    if(!auth){
        return <Navigate to='/login' state={{comingFrom:path}}/>
    }

    //If Authenticated
    return <>{children}</>;
};

export default PrivateRoute;