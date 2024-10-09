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
            Hi there, I am Vamsi Saketh from Hyderabad, India.
            <br />
            A passionate Salesforce Developer with experience in designing and implementing custom solutions, I thrive in creating efficient workflows and automating processes. 
            <br />
            <br />
            I have hands-on expertise with Salesforce Apex, Visualforce, and Lightning Web Components (LWC). With a strong understanding of OOP concepts, I build scalable solutions tailored to business needs.
            <br />
            <br />
            I am continuously learning and adapting to new features in the Salesforce ecosystem to deliver high-impact solutions for clients
            
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
            <li className="about-grid-info-list-item">Apex</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Git</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Apex</li>
            <li className="about-grid-info-list-item">Salesforce APIs</li>
            <li className="about-grid-info-list-item">LWC</li>
            <li className="about-grid-info-list-item">SOQL & SOSL</li>
            <li className="about-grid-info-list-item">SalesforceFlow</li>
            {/* <li className="about-grid-info-list-item"></li>
            <li className="about-grid-info-list-item"> </li>
            <li className="about-grid-info-list-item"></li>
            <li className="about-grid-info-list-item"> </li>
            <li className="about-grid-info-list-item"></li> */}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/mountaineer.png" alt="profile" fill />
          
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
