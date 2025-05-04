import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          About Me
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Hello! I'm <strong>Kanagalakshmi</strong>, a passionate full-stack web developer with a
          background in frontend technical training and an MCA degree. I specialize in the MERN
          stack and love building intuitive, performance-focused web applications. This portfolio
          showcases my projects, blogs, and ongoing learning journey in web development.
        </p>
        <p style={{ fontSize: "1.1rem", marginTop: "1rem", lineHeight: "1.6" }}>
          On this site, you’ll find my latest projects, blog posts on web development, and insights
          from my experience. Feel free to explore and connect!
        </p>
      </div>
    </>
  );
};

export default About;
