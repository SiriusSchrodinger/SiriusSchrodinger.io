import "./topbar.css"

export default function topbar() {
    return (
        <div className="topBar">
            <div className="topLeft">Alex Yang</div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">
                        <a className="anchorItem" href="#anchor1">PROJECTS</a>
                    </li>
                    <li className="topListItem">
                        <a className="anchorItem" href="#anchor2">PERSONAL</a>
                    </li>
                    <li className="topListItem">CV</li>
                </ul>
            </div>
            <div className="topRight">links</div>
        </div>
    )
}
