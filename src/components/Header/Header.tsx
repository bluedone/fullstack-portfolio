import { Container } from "./styles"
import { BrowserRouter as Router } from "react-router-dom"
import {NavHashLink, HashLink} from "react-router-hash-link"
import { useEffect, useState } from "react"

import Curriculo from "../../assets/ByaydonLiuResume_v2.pdf"
export function Header(){
  const [isActive, setActive] = useState(false);

  function toggleTheme(){
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle('light');
  }

  function closeMenu(){
    setActive(false);
  }


  return(
    <Container className="header-fixed">
        <Router>
          <HashLink smooth to="#home" className="logo">
            <span>B</span>
            <span>Liu</span>
          </HashLink>
          
          <input onChange={toggleTheme} className="container_toggle" type="checkbox" id="switch" name="mode"/>
          <label htmlFor="switch">Toggle</label>

          <nav className={isActive ? 'active' : ''}>
            <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
            <NavHashLink smooth to="#about" onClick={closeMenu}>About me</NavHashLink>
            <NavHashLink smooth to="#portfolio" onClick={closeMenu}>Protfolio</NavHashLink>
            <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact me</NavHashLink>
            <a href={Curriculo} download className="button">CV</a>
          </nav>

          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "To close menu" : "Open menu"} 
            className={isActive ? 'menu active' : 'menu'} 
            onClick={() => {setActive(!isActive)}}
            >
          </div>

        </Router>
      </Container>
      
  )
}