import React from "react";
import { ReactComponent as LogoImg } from "../img/logo1.svg";

const Logo = () => {
  return (
    <div className={"LogoWrapper"}>
      <LogoImg />
      <div className={"logoText"}>
        <span>CLEAN UP</span>
        <span>We clean, you relax</span>
      </div>
    </div>
  );
};

export default Logo;
