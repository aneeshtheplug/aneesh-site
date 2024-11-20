'use client'

import NavBar from "../navbar";
import "./projects.css";
import { useState } from "react";
import ProjectModal from "./projectModal";

type Project = {
    id: number;
    title: string;
    technologies: string[];
    image: string;
    description: string;
    demoLink: string;
    githubLink: string;
};


const projectsData: Project[] = [
    {
        id: 1,
        title: "House Party",
        technologies: ["Django", "React", "Spotify API"],
        image: "/images/house-party.png",
        description: "A collaborative music playing system that allows users to create rooms and control music playback through Spotify.",
        demoLink: "https://drive.google.com/file/d/1s40CimqGm6IplG3fEejMgEU5tM8McLGD/view?usp=sharing",
        githubLink: "https://github.com/aneeshtheplug/House-Party"
    },
    {
        id: 2,
        title: "Gaucho Ride",
        technologies: ["SpringBoot", "Javascript", "Google Maps API"],
        image: "/images/gaucho-ride.png",
        description: "A ride-sharing platform specifically designed for university students.",
        demoLink: "https://gauchoride.example.com",
        githubLink: "https://github.com/ucsb-cs156-s24/proj-gauchoride-s24-5pm-7"
    },
    {
        id: 3,
        title: "Better Bill Splitter",
        technologies: ["React-Native", "Firebase", "OCR API"],
        image: "/images/bill-split.png",
        description: "A mobile app that helps groups split bills easily using OCR technology to scan receipts.",
        demoLink: "https://billsplitter.example.com",
        githubLink: "https://github.com/ucsb-cs184-f24/team01-BillSplitter"
    }
];


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            <NavBar />
            <div className="projects-page">
                <h1 className="big-title">Projects</h1>
                
                {/* Project 1 */}
                <div className="project" onClick={() => handleProjectClick(projectsData[0])}>
                    <h2 className="project-title">{projectsData[0].title}</h2>
                    <ul className="technologies">
                        {projectsData[0].technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div className="image-placeholder">
                        <img src={projectsData[0].image} alt="Project Preview" />
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project" onClick={() => handleProjectClick(projectsData[1])}>
                    <h2 className="project-title">{projectsData[1].title}</h2>
                    <ul className="technologies">
                        {projectsData[1].technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div className="image-placeholder">
                        <img src={projectsData[1].image} alt="Project Preview" />
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project" onClick={() => handleProjectClick(projectsData[2])}>
                    <h2 className="project-title">{projectsData[2].title}</h2>
                    <ul className="technologies">
                        {projectsData[2].technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div className="image-placeholder">
                        <img src={projectsData[2].image} alt="Project Preview" />
                    </div>
                </div>
            </div>

            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </div>
    );
}