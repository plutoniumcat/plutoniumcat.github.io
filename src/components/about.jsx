import { useState, useEffect } from 'react';
import ENresume from '../data/amcpherson_resume.pdf';
import JPresume from '../data/amcpherson_shokumu.pdf';
import me2023 from '../media/me2023.jpg';
import { aboutEn, aboutJp, timelineEn, timelineJp } from '../data/aboutdata';

function About(props) {
    const [about, setAbout] = useState(aboutEn);
    const [timeline, setTimeline] = useState(timelineEn);
    const [resume, setResume] = useState(ENresume);
    const [resumeButton, setResumeButton] = useState("Resume (PDF)")

    useEffect(() => {
        if (props.langIsToggled) {
            setAbout(aboutJp);
            setTimeline(timelineJp);
            setResume(JPresume);
            setResumeButton("職務経歴書（PDF)");
        }
        else {
            setAbout(aboutEn);
            setTimeline(timelineEn);
            setResume(ENresume);
            setResumeButton("Resume (PDF)")
        }
    }, [props.langIsToggled])

    return (
        <section id="about">
            <h1 className="aboutme">About Me</h1>
            <div className="profile-container">
                <div className="profile-img-container">
                    <img src={ me2023 } alt="Me" id="profileimage" />
                </div>
                <div className="about-text">
                    { about.map((p) => (<p>{p}</p>)) }
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
                <a className="dl-resume" href={ resume }>{ resumeButton }</a>
            </div>
        </section>
    )
}

export default About;