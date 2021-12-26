import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let location = useLocation();
    const { user,  isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    if(user.email){
        
    }

    return <Navigate to="/login" state={{from: location}} />
};

export default PrivateRoute;