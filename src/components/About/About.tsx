import { Container } from "./styles";
import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import angularIcon from "../../assets/angularjs-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import gitIcon from "../../assets/github-icon.svg"
import AgileIcon from "../../assets/agile-icon.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCss3,
//   faGitAlt,
//   faGithub,
//   faHtml5,
//   faJsSquare,
//   faReact
// } from '@fortawesome/free-brands-svg-icons';

const skills = [
  "HTML", "CSS", "JavaScript", "Angular", "React", "Vue", "Flutter", "TypeScript", "Bootstrap", "Hook", "jQuery", "Python", "MySQL", "Node.js", "MongoDB", "C/C++", "Java", "SQL", "NoSql", "PostgreSQL", "Oracle", "Django", "PHP", "Rust", "Scala", "Swift", "Kotlin", "Node.js", "Express.js", "Scrum", "Kanban", "Agile", "Git", "Analytical", "Collaboration", "Project", "Management", "Creativity", "Jira", "Communication", "Teamwork", "Leadership"
]
export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Full Stack Developer with over 3 years of experience building both front-end development and back-end development. Processed knowledge of web applications using AngularJS, React, Vue, Node.js.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>

          <p>I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person who chases to make his dreams come true, hardworking and results oriented, I always seek to achieve my best version.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={angularIcon} alt="Angular" />
            </ScrollAnimation>
          </div>
          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={mysqlIcon} alt="Mysql" />
            </ScrollAnimation>
          </div>
          <div className="skill">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={AgileIcon} alt="Mysql" />
            </ScrollAnimation>
          </div>
        </div>
        <div></div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>All my skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {
            skills.map((skill, index) => {
              return (
                <div className="skill" >
                  <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                    {skill}
                  </ScrollAnimation>
                </div>
              );
            })
          }


        </div>
      </div>
      <div className="cube">
        <div className="cubespinner">
          <div className="face1">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="face2">
            <img src={gitIcon} alt="Git" />
          </div>
          <div className="face3">
            <img src={htmlIcon} alt="Html" />
          </div>
          <div className="face4">
            <img src={cssIcon} alt="Css" />
          </div>
          <div className="face5">
            <img src={nodeIcon} alt="Node" />
          </div>
          <div className="face6">
            <img src={vueIcon} alt="Vue" />
          </div>
        </div>
      </div>
    </Container>
  )
}
