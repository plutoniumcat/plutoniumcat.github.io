import ENresume from '../data/amcpherson_resume.pdf';
import JPresume from '../data/amcpherson_shokumu.pdf';
import me2023 from '../media/me2023.jpg';
import { aboutEn } from '../data/aboutdata';
import { aboutJp } from '../data/aboutdata';
import { timeline } from '../data/aboutdata';

function About(props) {
    return (
        <section id="about">
            <h1 className="aboutme">About Me</h1>
            <div className="profile-container">
                <div className="profile-img-container">
                    <img src={me2023} alt="Me" id="profileimage" />
                </div>
                <div className="about-text">
                    { props.langIsToggled ? aboutJp.map((p) => (<p>{p}</p>)) : aboutEn.map((p) => (<p>{p}</p>))}
                </div>
            </div>
            <h2>Timeline</h2>
            <div className="timeline-container">
                {
                    timeline.map((event)=>(
                        <div className="timeline-event" key={event.date}>
                            <h3>{event.date}</h3>
                            <p>{event.desc}</p>
                        </div>
                    ))
                }
            </div>
            <div className="resume">
                { props.langIsToggled ? 
                    <a className="dl-resume" href={ JPresume }>職務経歴書 (PDF)</a> :
                    <a className="dl-resume" href={ ENresume }>Resume (PDF)</a>
                }
            </div>
        </section>
    )
}

export default About;