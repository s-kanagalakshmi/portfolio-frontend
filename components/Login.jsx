// src/Login.jsx
import React, { useState,useEffect } from 'react';
// import { auth } from './firebase';
import { auth } from '../src/config';
import Navbar from "./Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
 useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
               navigate("/")
            }
          
        })
    }, [])
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="auth-container">
                <form className="auth-form" onSubmit={handleLogin}>
                    <h2>Login</h2>

                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn-submit">Login</button>

                    <div className="auth-link">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
