import React from "react";
import "./Footer.css";
import Header from "../HeroPage/Header";
import Vector from "../../../assets/svg/Vector.svg";

const Footer = () => {
  return (
    <div className={"containerWrapper"}>
      <div className={"headerContainer"}>
        <Header />
      </div>
      <div className={"support"}>
        <span className={"button"}>Email address</span>
        <span className={"image"}>
          <img src={Vector} alt={"logoTg"} className={"logoVector"} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
