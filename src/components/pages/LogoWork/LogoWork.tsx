import React from "react";
import "./LogoWork.css";
import { IWork } from "../../../shared/interfaces/IWork";
import meditation from "../../../assets/svg/meditation.svg";
import { Clean } from "../WorkPage/Clean";
import time from "../../../assets/svg/time.svg";
import service from "../../../assets/svg/service.svg";

const LogoWork = () => {
  const work: IWork[] = [
    {
      image: time,
      content: "Book a time",
      text: "Tell us the time and place",
    },
    {
      image: service,
      content: "Verified service",
      text: "A team of professionals is coming\n" + " and clears your place.",
    },
    {
      image: meditation,
      content: "Relax",
      text: "Enjoy life and come back\n" + "to a clean place",
    },
  ];

  return (
    <div className={"time"}>
      {work.map((el) => (
        <Clean image={el.image} content={el.content} text={el.text} />
      ))}
    </div>
  );
};

export default LogoWork;
