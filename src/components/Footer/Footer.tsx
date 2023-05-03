import {Container} from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer(){
  return(
    <Container className="footer">
      <div>
        <p>This website was made with <img src={reactIcon}/> is very <span>❤️</span></p>
      </div>

      <div className="social-media">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
      
    </Container>
  )
}