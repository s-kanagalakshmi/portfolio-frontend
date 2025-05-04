import React from "react";
// import "./App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";
import { auth } from '../src/config';

import "/src/App.css"
import './Home.css'
const Home = () => {
    const navigate = useNavigate()
    const projectList = [
        {
            title: " SNAPCART – A Full-Stack E-Commerce Application🛒",
            description: "This project has been a deep dive into full-stack development, integrating user authentication, secure payment processing, and real-time cart and order management.",
            tech: ["React.js", "Firebase Authentication", "Axios","MongoDB"],
            img: "/Images/ecomm.jpeg",
            link: " https://snapcart-frontend-tvrx.vercel.app/"
        },
        {
            title: "📋 LISTIFY - Todo App",
            description: "MERN stack project to manage daily tasks. Includes user authentication and cloud deployment.",
            tech: ["React", "MongoDB", "Express", "Node.js"],
            img: "/Images/todo.png",
            link: "https://todo-frontend-iota-ten.vercel.app/"
        },
        {
            title: "⛅ Weather App",
            description: "Simple weather application using public APIs. Displays live data using modern UI.",
            tech: ["React", "OpenWeather API", "CSS"],
            img: "Images/weather.jpeg",
            link: "https://weather-app-rho-bice-58.vercel.app/"
        },
        {
            title: "⛅ Bulk Mailer App",
            description: " Bulk Mailer, a streamlined bulk email sending application built using the MERN stack",
            tech: ["React", "Nodemailer (Gmail SMTP)", "Node.js"],
            img: "Images/bulk.jpeg",
            link:   "https://bulk-mailer-frontend-mu.vercel.app/"
            
          
        },
        {
            title: "⛅ Nostra Ecommerce Clone",
            description: " Nostra using HTML, CSS, and JavaScript to create a seamless and interactive shopping experience. ",
            tech: ["HTML", "CSS", "Javascript"],
            img: "Images/nostra.jpeg",
            link:   "https://s-kanagalakshmi.github.io/Nostra-ecommerce-website/index.html",
            
          
        },
        {
            title: "⛅ GreenDen Ecommerce Clone",
            description: " Greenden using HTML, Tailwind CSS, and JavaScript to create a seamless and interactive shopping experience. ",
            tech: ["HTML", "Tailwind CSS", "Javascript"],
            img: "Images/greenden.jpg",
            link:   "https://s-kanagalakshmi.github.io/Greenden-website/"

          
        }
        
    ];
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
                        <h2>A Passionate Full Stack Developer</h2>
                        <p>
                        I specialize in the MERN stack and love building intuitive, performance-focused web applications. This portfolio showcases my projects, blogs, and ongoing learning journey in web development.
                        </p>
                        {/* <div className="hero-buttons">
                            <button className="btn-outline" onClick={() => navigate('/about')}>About Me</button>
                        </div> */}
                    </div>

                    {/* Right Side Image & Cards */}
                    <div className="hero-image">
                        {/* <img
                            src="./src/assets/profile.png"
                            alt="Kanagalakshmi"
                            className="profile-img"
                        /> */}
                        {/* <div className="card top-left">
                            <p className="card-title">Fresher</p>
                            <p className="card-sub">Ready to Learn & Build</p>
                        </div>
                        <div className="card bottom-right">
                            <p className="card-title">MERN Stack</p>
                            <p className="card-sub">Projects in Progress</p>
                        </div> */}
                    </div>
                    <section>
                       
                        <div className="tech-icons">
                        <h1>SKILLS:</h1>
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
                <div className="container1">
                    {/* <h2 className="section-title">My Projects</h2> */}
                    <div className="projects-grid">
                        {projectList.map((project, index) => (
                            <div className="project-card" key={index}>
                     <a href={project.link} target="_blank" rel="noreferrer">

                                <img src={project.img} alt={project.title} className="project-img" />
                                </a>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ul className="tech-tags">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                    Live Demo →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>)
}
export default Home