import React from 'react';
import {LogoItem} from "./HeroPage";
import './HeroPage.css'

export const LogoPage: React.FC<LogoItem> = (props) => {
  return (
    <div style={{marginRight:30}}>
      <p>{props.text}</p>
      <div className={"contactData"}>
        <img className={"LogoEmail"} src={props.image} alt={"email"}/>
        <p className={"text"}>{props.content}</p>
      </div>
    </div>
  );
};



