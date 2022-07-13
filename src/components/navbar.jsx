import React from "react";
import NavLink  from "./nav-link";
import NavDropLink from "./dropdown-link";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md">
        <div className="container-fluid text-center nav-container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink href="/" name="Home"></NavLink>
            <NavLink href="https://kamilslabosz.github.io/portfolio" name="About me"></NavLink>
            <NavLink href="https://tabletop-group.herokuapp.com/contact-me" name="Contact"></NavLink>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle nav-font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other Apps
                </a>
                <ul className="dropdown-menu nav-color" aria-labelledby="navbarDropdown">
                    <NavDropLink href="https://tabletop-group.herokuapp.com/" name="Tabletop Groupt"></NavDropLink>
                    <NavDropLink href="https://tabletop-group.herokuapp.com/todo" name="Todo list"></NavDropLink>
                    <NavDropLink href="https://random-training-video.herokuapp.com/" name="Random Training"></NavDropLink>
                </ul>
      
              </li>
      
      
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;