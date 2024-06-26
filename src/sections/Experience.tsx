import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      const items = document.querySelectorAll(".exp-slider-item");
      let topPosition = 0;
      for (let i = 0; i < selected; i++) {
        topPosition += items[i].clientHeight; // Calculate the top position based on actual height
      }
      underline!.style.top = `${topPosition}px`; // Use px instead of rem for precision
    };
    transformSelected();
  }, [selected]);
  

  const expereinces = [
    {
      name: "Globallogic",
      role: "Analyst",
      url: "",
      start: "October 2020",
      end: "March 2024",
      shortDescription: [
        
        "Developed and maintained geospatial databases, ensuring data accuracy and consistency acrossmultiple projects.",
        "Conducted spatial analyses using ArcGIS and other GIS software to support decision-making processes.",
        "Managed the mapping aspects of complex projects, coordinating with stakeholders and ensuringdeliverables met deadlines and requirements.",
        "Provided technical support and training to team members on GIS tools and methodologies",
        "Implemented best practices for data quality control and ensured the accuracy of geospatial data forvarious projects",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
