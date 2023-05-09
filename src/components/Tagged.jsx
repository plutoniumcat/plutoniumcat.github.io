import { useParams } from 'react-router-dom';
import Projects from './projects';

export function Tagged() {

    let { tag } = useParams();

    return(
        <section id="tagged-projects">
            <h1 className="projects-title">Projects tagged #{ tag }</h1>
            <Projects tag={ tag } />
            <div className="homeNav">Return to Homepage</div>
        </section>
    )
}