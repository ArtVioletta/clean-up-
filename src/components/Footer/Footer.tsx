import React from 'react';
import "./Footer.css";
import Logo from "../HeroPage/Logo";
import Header from "../HeroPage/Header";

const Footer = () => {
  return (
    <div className={"containerWrapper"}>
      <div className={"headerContainer"}>
      <Header/>
      </div>
      <div className={"support"}>
        <span className={"button"}>Email address</span>
        <span className={"image"}>
           <img src={"Vector.svg"} alt={"logoTg"} className={'logoVector'}/>
        </span>
      </div>
    </div>
  );
};

export default Footer;