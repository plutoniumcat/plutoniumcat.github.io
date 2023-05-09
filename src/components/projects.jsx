import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import dailyexercise from '../media/projects/dailyexercise.jpg';
import learninglab from '../media/projects/learninglab.jpg';

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

function Projects(props) {
    const [tag, setTag] = useState(null);

    useEffect(() => {
        if (props.tag){
            setTag(props.tag);
        }
    }, [props.tag]);

    const enlargeCard = (event) => event.currentTarget.style.transform = "scale(1.1)";
    const resetCard = (event) => event.currentTarget.style.transform = "scale(1)";

    function hasTag(project) {
        if ({ tag }.tag) {
            return project.tags.includes({ tag }.tag)
        }
        else {
            return true
        }
    }

    function tagLink(tag) {
        return `/projects/tagged/${tag}`
    }

    return(
        <section id="projects">
            {tag ? null: <h1 className="projects-title">Projects</h1>}
            <div className="card-container">
                {projects.filter(hasTag).map((project) => (
                    <div className="project-card" key={project.id} onMouseOver={enlargeCard} onMouseOut={resetCard} >
                        <img className="project-img" src={project.img} alt={project.name} />
                        <div className="project-notes">
                            <h2>{project.name}</h2>
                            <p className="stack">Stack: {project.stack}</p>
                            <p className="desc">{project.desc}</p>
                            <a className="github-link" href={project.github}>View on GitHub</a>
                            <p>
                                {project.tags.map(
                                    (tag)=> (
                                        <span key={ tag }><Link to={tagLink({ tag }.tag)}>#{ tag }</Link> </span>
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