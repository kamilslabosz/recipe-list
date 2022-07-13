import React from "react";

function NavLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link nav-font" href={props.href}>{props.text}</a>
        </li>
    );
  }
  
  export default NavLink;