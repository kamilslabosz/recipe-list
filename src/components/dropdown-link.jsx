import React from "react";

function NavDropLink(props) {
    return (
        <li><a className="dropdown-item nav-color nav-font"  href={props.href}>{props.name}</a></li>

    );
  }
  
  export default NavDropLink;