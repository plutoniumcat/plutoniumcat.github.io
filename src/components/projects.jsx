// import React, { useState, useEffect } from "react";
import dailyexercise from '../media/projects/dailyexercise.jpg'
import learninglab from '../media/projects/learninglab.jpg'

const projects = [
    {
        "id": 1,
        "name": "DailyExercise",
        "stack": "Python",
        "img": dailyexercise,
        "github": "https://github.com/plutoniumcat/DailyExercise",
        "desc": "Terminal application for tracking exercise routines.",
        "tags": ["python"]
    },
    
    {
        "id": 2,
        "name": "LearningLab",
        "stack": "Python, Flask, SQLAlchemy, Marshmallow, PostgreSQL",
        "img": learninglab,
        "github": "https://github.com/plutoniumcat/learninglab",
        "desc": "REST API for curating lists of tutorials.",
        "tags": ["python", "flask", "SQL", "API", "web"]
    }
];

function Projects() {

    const enlargeCard = (event) => event.currentTarget.style.transform = "scale(1.1)";
    const resetCard = (event) => event.currentTarget.style.transform = "scale(1)";

    return (
        <section id="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="card-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.id} onMouseOver={enlargeCard} onMouseOut={resetCard} >
                        <img className="project-img" src={project.img} alt={project.name} />
                        <div className="project-notes">
                            <h2>{project.name}</h2>
                            <p className="stack">Stack: {project.stack}</p>
                            <p className="desc">{project.desc}</p>
                            <a href={project.github}>View on GitHub</a>
                            <p>
                                {project.tags.map(
                                    (tag)=> (
                                        <span key={tag}>#{tag} </span>
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