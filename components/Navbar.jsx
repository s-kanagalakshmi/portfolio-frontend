// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../src/config';
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [logged, setlogged] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setlogged(true)
            }
            else {
                setlogged(false)

            }
        })
    }, [])
    const handleNavigation = (path) => {
        navigate(path);
    };
const logout=()=>{
signOut(auth)
}
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">KL's Portfolio</div>
                <ul className="nav-links">
                    <li><button className="btn-login" onClick={() => handleNavigation("/")}>Home</button></li>
                                       <li><button className="btn-login" onClick={() => handleNavigation("/blog")}>Blog</button></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="btn-cv">Download CV</button>
                    {logged ?<button className="btn-login" onClick={logout}>Logout</button> :
                        <button className="btn-login" onClick={() => handleNavigation("/login")}>Login</button>

                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
