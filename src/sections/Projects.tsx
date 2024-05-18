import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/Paytm.JPG",
      projectName: "PayTM",
      // projectLink: "",
      projectDescription:
      "Our innovative platform empowers you to take control of your finances. Sign up, manage your wallet balance, send money seamlessly, and access advanced features like transaction history and QR code integration (coming soon). We leverage cutting-edge technologies (MongoDB, Tailwind CSS, Axios) for a robust and user-friendly experience",
      projectTech: [
        "React",
        "Redux Toolkit", 
        "CSS",
        "Mongodb",
        "Typescript",
        "NextJs",
      ],
      projectExternalLinks: {
        github: "https://github.com/VamsiSaketh98/Paytm-Clone",
        externalLink: "",
      },
    },
    {
      image: "/Gemini.JPG",
      projectName: "Gemini-clone",
      projectLink: "",
      projectDescription:
      "Powered by cutting-edge AI: This project leverages the capabilities of the Google Gemini API 1.5 to deliver innovative text generation features.",
      projectTech: [
        "React",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/VamsiSaketh98/Gemini-Clone",
        externalLink: "",
      },
    },
    // {
    //   image: "",
    //   projectName: "Github Autocommit Bot",
    //   projectLink: "",
    //   projectDescription:
    //   "Coming Soon.",
    //   projectTech: [
    //     "Python",
    //     "OS Module",
    //   ],
    //   projectExternalLinks: {
    //     github: "",
    //     externalLink: "",
    //   },
    // },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
