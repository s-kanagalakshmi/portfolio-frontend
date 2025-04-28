import React, { useState,useEffect } from 'react';
// import { auth } from './config';
import { auth } from '../src/config';
import Navbar from "./Navbar";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/")
            }

        })
    }, [])
    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfully!');
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="auth-container">
                <form className="auth-form" onSubmit={handleSignup}>
                    <h2>Sign Up</h2>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" value={name}
                        onChange={(e) => setName(e.target.value)} required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />

                    <label>Password</label>
                    <input type="password" placeholder="Create a password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    <label> Confirm Password</label>

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-submit">Sign Up</button>

                    <div className="auth-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;
