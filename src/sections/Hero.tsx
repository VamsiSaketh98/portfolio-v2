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
        I craft things for the web.
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
        I'm a full-stack developer passionate about crafting user-friendly web experiences.
        I bring strong skills in front-end development (HTML5, CSS3, React, Material-UI)
        <br />  
        Back-end development (Java, Node.js, Express.js, SQL, MongoDB).
        <br />  
        My field of Interest's are building new  Web Technologies and Products and also in areas related to Machine Learning.
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
        <Button text="Check out my latest work" link="" style={{ marginRight: '10px' }} />
        <CopyButton text="" className="btn" />
      </motion.div>
    </div>
  );
}

export default Hero;
