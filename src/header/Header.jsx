import "./header.css";
import myImage from "../images/myImage.jpeg";

export default function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <h1 className="headerTitle">About Me</h1>
                <div className="headerParagraph">
                    <p>
                        I am a post-undergraduate student researcher in the
                         <a className="hyperlink" href="https://www.kiddlab.com/about"> Kidd Lab</a> at UC Berkeley, 
                    advised by Professor Celeste Kidd. My current research focuses on 
                    developing computational models of social intereactions and
                    formation of social conceptes.
                    </p>
                    <p>
                        I am particularly interested in bias formation.
                    </p>
                    <br />
                    <p>
                        I am also a co-founder and the tech lead of a blackchain startup company, Overeality.
                        We are advised by Turing Award Winners 
                         <a className="hyperlink" href="https://amturing.acm.org/award_winners/diffie_8371646.cfm"> Dr. Whitfield Diffie </a> 
                         and<a className="hyperlink" href="https://ee.stanford.edu/~hellman/"> Dr. Martin Hellman </a>  
                        and aiming to bring the best technology to the crypto culture. 
                    </p>
                </div>
            </div>
            <div className="headerRight">
                <img className="myImage" img src={myImage} width="200" height="200" alt="myImage" />
                <div className="myName">Alex Yang</div>
            </div>
        </div>
    )
}
