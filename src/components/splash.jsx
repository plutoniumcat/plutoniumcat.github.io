import splashVideo from '../media/splashVideo.mp4'

function Splash() {
    return(
        <div className="stage">
            <video autoPlay={true} loop={true}>
                <source src={splashVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#social">Social</a></li>
                </ul>
            </nav>
            <div className="me">
                <h1 className="name">Alexandria McPherson</h1>
                <p className="title">Web Developer</p>
            </div>
        </div>
    )
}

export default Splash;