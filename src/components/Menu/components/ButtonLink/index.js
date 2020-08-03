import React from "react";
import "../../../Menu/Menu.css";

function ButtonLink(props) {
  return (
    // props ButtonLink e href
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
