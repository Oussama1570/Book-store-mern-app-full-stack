import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {  // Changed 'PrivateRoute' to 'AdminRoute' as this is the correct name
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (currentUser && currentUser.isAdmin) {  // Added check for admin role
        return children;
    }

    return <Navigate to="/login" replace />;
};

export default AdminRoute;
