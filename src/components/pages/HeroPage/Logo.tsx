import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/svg/logo1.svg";

const Logo = () => {
  return (
    <div className={"LogoWrapper"}>
      <LogoImage />
      <div className={"logoText"}>
        <span>CLEAN UP</span>
        <span>We clean, you relax</span>
      </div>
    </div>
  );
};

export default Logo;
