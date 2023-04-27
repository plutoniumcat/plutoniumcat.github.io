import LanguageToggle from './LanguageToggle';
import resume from '../media/amcpherson_resume.pdf';
import me2023 from '../media/me2023.jpg'

const timeline = [
    {
        "date": "October 2011",
        "desc": "Graduated from Griffith University with a Bachelor of Arts in Japanese Language"
    },
    {
        "date": "October 2022",
        "desc": "Began Full-stack Web Development bootcamp at Coder Academy"
    },
    {
        "date": "July 2023",
        "desc": "End of Coder Academy bootcamp!"
    }
]

function About() {
    return (
        <section id="about">
            <LanguageToggle />
            <h1 className="aboutme">About Me</h1>
            <div className="profile-container">
                <img src={me2023} alt="Me" id="profileimage" />
                <div className="about-text">
                    <p>Welcome to my website! I am a full-stack web developer with a passion 
                    for technology and a background in Japanese to English translation. 
                    I develop web applications using the MERN stack, Python, Flask, and SQL.</p>

                    <p>In addition to my technical abilities, I am fluent in Japanese and have worked 
                        as a professional translator in the past. This experience has given me a unique perspective 
                        on cross-cultural communication and has helped me to develop a keen attention to detail.</p>

                    <p>My interests extend beyond technology and language, as I am also an avid fan of music, art, 
                        and video games. I am fascinated by different cultures and languages, and I enjoy exploring 
                        the nuances that make each one unique.</p>

                    <p>In my free time, I like to experiment with creating visual effects and animations using code. 
                        I find it incredibly rewarding to be able to bring a creative vision to life through programming.</p>

                    <p>As a dedicated and passionate developer, I am always seeking new challenges and 
                        opportunities to learn and grow. I am excited to bring my skills and experiences to the 
                        table and collaborate with like-minded individuals and organizations. 
                        Thank you for visiting my website, and I look forward to connecting with you soon!</p>
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
                <a className="dl-resume" href={resume}>Resume (PDF)</a>
            </div>
        </section>
    )
}

export default About;