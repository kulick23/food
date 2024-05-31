import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='login'>
            {currentUser ? (
                <div>
                    <h1>You are logged in</h1>
                    <p>{currentUser.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>{isRegistering ? 'Register' : 'Log in'}</h1>
                    <div className='login__box'>
                        {error && <p className='error'>{error}</p>}
                        <div className='login__inputs'>
                            <label>Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='login__inputs'>
                            <label>Password</label>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='login__buttons'>
                            {isRegistering ? (
                                <>
                                    <button className='login__submit' onClick={handleRegister}>Register</button>
                                    <button className='login__toggle' onClick={() => setIsRegistering(false)}>Already have an account? Log in</button>
                                </>
                            ) : (
                                <>
                                    <button className='login__submit' onClick={handleLogin}>Submit</button>
                                    <button className='login__toggle' onClick={() => setIsRegistering(true)}>Don't have an account? Register</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;


