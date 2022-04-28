import React from "react";
import { Work } from "./LogoWork";
import "./LogoWork.css";

export const Clean: React.FC<Work> = (props) => {
  return (
    <div className={"timeClean"}>
      <div>
        <img className={"logoTwo"} src={props.image} alt={"work"} />
      </div>
      <p className={"wrapper"}>{props.content}</p>
      <p className={"textWrapper"}>{props.text}</p>
    </div>
  );
};
