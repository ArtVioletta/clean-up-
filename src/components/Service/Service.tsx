import React from "react";
import "./Service.css";
import Content from "./Content";

const Service = () => {
  return (
    <div className={"service"}>
      <div>
        <h1 className={"serviceUp"}>Our service</h1>
        <p>
          {" "}
          Cleaning helps you be productive by giving <br />
          you time to focus on what matters most.{" "}
        </p>
      </div>
      <Content />
    </div>
  );
};

export default Service;
