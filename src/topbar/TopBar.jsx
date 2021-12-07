import "./topbar.css"
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function topbar() {
    return (
        <div className="topBar">
            <div className="topLeft">Alex Yang</div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <a className="anchorItem" href="#anchor0">HOME</a>
                    </li>
                    <li className="topListItem">
                        <a className="anchorItem" href="#anchor1">PROJECTS</a>
                    </li>
                    <li className="topListItem">
                        <a className="anchorItem" href="#anchor2">PUBLICATIONS</a>
                    </li>
                    <li className="topListItem">
                        <a className="anchorItem" href="#anchor3">PERSONAL</a>
                    </li>
                    <li className="topListItem">
                        <a className="tophyperlink" href="https://drive.google.com/file/d/1srSC0vlCEy7VGtShic4FDn6Vggh7Ngrf/view?usp=sharing">
                            CV
                        </a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <a href="https://www.linkedin.com/in/huiwen-yang-5666a8143/" target="_blank">
                    <img className="linkedin" img src={linkedin} width="30" height="30" alt="linkedin" />
                </a>
                <a href="https://github.com/SiriusSchrodinger" target="_blank">
                    <img className="github" src={github} width="35" height="33" alt="github" />
                </a>
            </div>
        </div>
    )
}
