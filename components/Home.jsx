import React from "react";
// import "./App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar"; 
import { auth } from '../src/config';

import "/src/App.css"
const Home = () => {
  

    return (
        <>
            {/* Navbar */}

            <Navbar />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    {/* Left Side Text */}
                    <div className="hero-text">
                        <h1>
                            Hello I'm <br />
                            <span>Kanagalakshmi</span>
                        </h1>
                        <h2>Full Stack Developer</h2>
                        <p>
                            I craft scalable web applications with modern technologies.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">Get a Quote</button>
                            <button className="btn-outline">About Me</button>
                        </div>
                    </div>

                    {/* Right Side Image & Cards */}
                    <div className="hero-image">
                        <img
                            src="./src/assets/profile.png"
                            alt="Kanagalakshmi"
                            className="profile-img"
                        />
                        <div className="card top-left">
                            <p className="card-title">Fresher</p>
                            <p className="card-sub">Ready to Learn & Build</p>
                        </div>
                        <div className="card bottom-right">
                            <p className="card-title">MERN Stack</p>
                            <p className="card-sub">Projects in Progress</p>
                        </div>
                    </div>
                    <section>
                        <div className="tech-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" title="Firebase" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" />
                        </div>
                    </section>

                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="portfolio">
                <div className="container">
                    <h2 className="section-title">My Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <h3>LISTIFY - Todo App</h3>
                            <p>MERN stack project to manage daily tasks. Includes user authentication and cloud deployment.</p>
                        </div>
                        <div className="project-card">
                            <h3>UNO Game</h3>
                            <p>Full stack UNO game with React frontend and Firebase backend, built during portfolio training.</p>
                        </div>
                        <div className="project-card">
                            <h3>Weather App</h3>
                            <p>Simple weather application using public APIs. Displays live data using modern UI.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}
export default Home