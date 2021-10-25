import CurrentProject1 from "../../currentproject/CurrentProject1"
import CurrentProject2 from "../../currentproject/CurrentProject2"
import PastProject1 from "../../pastproject/PastProject1"
import PastProject2 from "../../pastproject/PastProject2"
import PastProject3 from "../../pastproject/PastProject3"
import Overeality from "../../overeality/Overeality"
import "./home.css"

export default function Home() {
    return (
        <>
        <div id="anchor1"></div>
        <div className="home">
            <div className="currentProjects">
            <div className="currentProjectsTitle">
                Current Projects
            </div>
                <div className="currentProjectList">
                    <CurrentProject1 />
                    <CurrentProject2 />
                </div> 
            </div>
            <div className="pastProjects">
            <div className="pastProjectsTitle">
                Past Projects
            </div>
                <PastProject1 />
                <PastProject2 />
                <PastProject3 />
            </div>
            <div id="anchor2"></div>
            <div className="work">
                <Overeality />
            </div>
        </div>
        </>
    )
}
