import React from 'react';
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
