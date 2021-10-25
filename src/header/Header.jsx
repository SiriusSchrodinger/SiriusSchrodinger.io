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
                         <a className="hyperlink" href="https://www.kiddlab.com/about" target="_blank"> Kidd Lab</a> at UC Berkeley, 
                    advised by Professor Celeste Kidd. My current research focuses on 
                    developing computational models of social intereactions and 
                    information processing.
                    I am particularly interested in formation of social concepts.
                    </p>
                        
                    <br />
                    <p>
                        I am also a co-founder and the tech lead of a blackchain startup company, 
                            <a className="hyperlink" href="https://drive.google.com/file/d/1YqcnEGLkNY99Frf4flXBs-i2Q-h6kGiD/view?usp=sharing" target="_blank"> Overeality Labs </a>.
                        We are advised by Turing Award Winners 
                         <a className="hyperlink" href="https://amturing.acm.org/award_winners/diffie_8371646.cfm" target="_blank"> Dr. Whitfield Diffie </a> 
                         and<a className="hyperlink" href="https://ee.stanford.edu/~hellman/" target="_blank"> Dr. Martin Hellman </a>  
                        and aiming to deploy the best technology to the communities in crypto culture. 
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
