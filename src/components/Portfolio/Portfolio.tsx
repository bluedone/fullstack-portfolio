import { Container } from "./styles";
import Experience from "../Experience";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/bluedone/Bits-of-code" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar github" />
                </a>
                <a href="https://soumyajitblogs.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar github" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Bits Of Code</h3>
              <p>Collection Of Blogs For Developers
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              
              <a href="https://github.com/bluedone/My-full-stack-Protfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar github" />
                </a>
                <a href="https://portfolio-fullstack-bray-f0df4.web.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio V1</h3>
              <p>The first version of my portfolio.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              <a href="https://github.com/bluedone/Chatify" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar github" />
                </a>
                <a href="https://chatifynew.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CHATIFY</h3>
              <p>Real-time Chat Application
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>VueJs</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
      {/* <Experience /> */}
    </Container>
  );
}