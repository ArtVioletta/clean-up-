import React from "react";
import "../LogoWork/LogoWork.css";
import { IWork } from "../../../shared/interfaces/IWork";

export const Clean: React.FC<IWork> = (props) => {
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
