import React from 'react';
import "./WorkPage.css";
import LogoWork from "./LogoWork";

const WorkPage = () => {
  return (
    <div className={"container"}>
      <h2 className={"work"}>
        How it works?
      </h2>
      <h1 className={"WorkWrapper"}>
        Your busy life does not leave <br/>
        you enough time, to clean up?
      </h1>
    <LogoWork/>
    </div>
  );
};

export default WorkPage;