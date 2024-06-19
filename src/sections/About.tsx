import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi Everyone, I am Vamsi Saketh from Hyderabad, India.
            I'm a full-stack developer passionate about building modern and interactive web applications. I utilize a versatile skillset that includes front-end frameworks like React and Tailwind CSS to craft user-friendly interfaces, alongside back-end technologies like Node.js, and databases like PostgreSQL, MongoDB and SQL (with Prisma for smooth data access).
          </p>
          <p className="about-grid-info-text">
            Beyond coding, I'm fascinated by the potential of Machine Learning and constantly learning new things in this field.
          </p>
          <p className="about-grid-info-text">
            In my free time, I turn my analytical eye to the financial markets, constantly learning and refining my trading strategies.
          </p>
          <p className="about-grid-info-text">
            Skills
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Git</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Sql</li>
            <li className="about-grid-info-list-item">NoSql</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
            <li className="about-grid-info-list-item">HTML/CSS</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">VS Code</li>
            <li className="about-grid-info-list-item">Postman</li>
            <li className="about-grid-info-list-item">AWS </li>
            <li className="about-grid-info-list-item"></li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/avatar.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
