import { useParams, Link } from 'react-router-dom';

const projects = [
    {
        "id": 1,
        "name": "DailyExercise",
        "stack": "Python",
        "img": "dailyexercise",
        "github": "https://github.com/plutoniumcat/DailyExercise",
        "desc": "Terminal application for tracking exercise routines.",
        "tags": ["python"]
    },
    
    {
        "id": 2,
        "name": "LearningLab",
        "stack": "Python, Flask, SQLAlchemy, Marshmallow, PostgreSQL",
        "img": "learninglab",
        "github": "https://github.com/plutoniumcat/learninglab",
        "desc": "REST API for curating lists of tutorials.",
        "tags": ["python", "flask", "SQL", "API", "web"]
    }
];

export function Tagged() {

    let { tag } = useParams();

    const enlargeCard = (event) => event.currentTarget.style.transform = "scale(1.1)";
    const resetCard = (event) => event.currentTarget.style.transform = "scale(1)";

    function hasTag(project) {
        return project.tags.includes({ tag }.tag)
    }

    function tagLink(tag) {
        return `/projects/tagged/${tag}`
    }

    return(
        <section id="projects">
            <h1 className="projects-title">Projects tagged #{ tag }</h1>
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
            <div className="homeNav">Return to Homepage</div>
        </section>
    )
}