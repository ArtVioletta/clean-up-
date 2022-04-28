import React from "react";
import "./LogoWork.css";
import { Clean } from "./Clean";

export interface Work {
  image: string;
  content: string;
  text: string;
}

const LogoWork = () => {
  const data: Work[] = [
    {
      image: "time.svg",
      content: "Book a time",
      text: "Tell us the time and place",
    },
    {
      image: "service.svg",
      content: "Verified service",
      text: "A team of professionals is coming\n" + " and clears your place.",
    },
    {
      image: "meditation .svg",
      content: "Relax",
      text: "Enjoy life and come back\n" + "to a clean place",
    },
  ];

  return (
    <div className={"time"}>
      {data.map((el) => (
        <Clean image={el.image} content={el.content} text={el.text} />
      ))}
    </div>
  );
};

export default LogoWork;
