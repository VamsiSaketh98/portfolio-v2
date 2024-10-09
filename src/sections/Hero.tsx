import Button from "@/components/Button";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import CopyButton from "@/components/CopyButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hero() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Vamsi Saketh.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I am a Salesforce Developer.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        As a passionate Salesforce Developer with experience in designing and implementing custom solutions, I thrive in creating efficient workflows and automating processes. 
        <br />
        I have hands-on expertise with Salesforce Apex, Visualforce, and Lightning Web Components (LWC). With a strong understanding of OOP concepts, I build scalable solutions tailored to business needs. I am continuously learning and adapting to new features in the Salesforce ecosystem to deliver high-impact solutions for clients.
        <br />
        
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >  <ToastContainer />
        <Button text="Check out my latest work" link="https://portfolio-v2-rho-mauve.vercel.app/" style={{ marginRight: '10px' }} />
      </motion.div>
    </div>
  );
}

export default Hero;
