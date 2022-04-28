import React from 'react';
import Logo from "./Logo";

const Header = () => {
  return (
    <div className={"header"}>
      <Logo/>
      <div className={'navWrapper'}>
        <span className={"navlink"}>Home</span>
        <span className={"navlink"}>Service</span>
        <span className={"navlink"}>How we are working</span>
        <span className={"navlink"}>Blog</span>
      </div>
    </div>
  );
};

export default Header;