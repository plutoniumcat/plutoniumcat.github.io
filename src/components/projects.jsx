// import React, { useState, useEffect } from "react";
import dailyexercise from '../media/projects/dailyexercise.jpg'

const projects = [
    {
        "id": 1,
        "name": "DailyExercise",
        "stack": "Python",
        "img": "../../public/projects/dailyexercise.jpg",
        "github": "https://github.com/plutoniumcat/DailyExercise",
        "desc": "Terminal application for tracking exercise routines.",
        "tags": ["python"]
    },
    
    {
        "id": 2,
        "name": "LearningLab",
        "stack": "Python, Flask, SQLAlchemy, Marshmallow, PostgreSQL",
        "img": "./media/projects/learninglab.jpg",
        "github": "https://github.com/plutoniumcat/learninglab",
        "desc": "REST API for curating lists of tutorials.",
        "tags": ["python", "flask", "SQL", "API", "web"]
    }
];

function Projects() {
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //   fetch("../data/projectdata.json")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .then((data) => setProjects(data));
    // }, []);

    return (
        <section id="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="card-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img className="project-img" src={dailyexercise} alt={project.name} />
                        <div className="project-notes">
                            <h2>{project.name}</h2>
                            <p className="stack">Stack: {project.stack}</p>
                            <p className="desc">{project.desc}</p>
                            <a href={project.github}>View on GitHub</a>
                            <p>
                                {project.tags.map(
                                    (tag)=> (
                                        <span>#{tag} </span>
                                    )
                                )}
                            </p>
                        </div>
                    </div>
                 ))}
            </div>
        </section>
    )
}

export default Projects;