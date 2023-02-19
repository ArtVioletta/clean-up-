import React from "react";
import "./HeroPage.css";
import { ILogoItem } from "../../../shared/interfaces/ILogoItem";

export const LogoPage: React.FC<ILogoItem> = (props) => {
  return (
    <div style={{ marginRight: 30 }}>
      <p>{props.text}</p>
      <div className={"contactData"}>
        <img className={"LogoEmail"} src={props.image} alt={"email"} />
        <p className={"textLogoPage"}>{props.content}</p>
      </div>
    </div>
  );
};
