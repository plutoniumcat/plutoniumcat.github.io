import GithubLogo from '../media/GithubLogo.png'
import LILogo from '../media/LILogo.png'
import TwitterLogo from '../media/TwitterLogo.png'

function Social() {
    return (
        <footer id="social">
            <ul>
                <li>
                    <a href="https://github.com/plutoniumcat"><img src={GithubLogo} alt={"Github"} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alexandria-mcpherson-29317888/"><img src={LILogo} alt={"LinkedIn"} /></a>
                </li>
                <li>
                    <a href="https://twitter.com/meltingcyan"><img src={TwitterLogo} alt={"Twitter"} /></a>
                </li>
            </ul>
        </footer>
    )
}

export default Social;