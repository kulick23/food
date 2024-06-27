import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';

interface AuthContextProps {
    currentUser: User | null;
    isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const isAuthenticated = () => !!currentUser;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
