import React from "react";
import "./HeroPage.css";
import Header from "./Header";
import { LogoPage } from "./LogoPage";
import call from "../../../assets/svg/call.svg";
import calendar from "../../../assets/svg/calendar.svg";
import email from "../../../assets/svg/email.svg";
import play from "../../../assets/svg/play.svg";
import downArrow1 from "../../../assets/svg/downArrow1.svg";
import kercher1 from "../../../assets/images/kercher1.png";
import { ILogoItem } from "../../../shared/interfaces/ILogoItem";

const HeroPage = () => {
  const data: ILogoItem[] = [
    {
      id: 1,
      text: "Have questions ? Call us",
      image: call,
      content: "(629) 555-0129",
    },
    {
      id: 2,
      text: "We are open from (8:00am - 5pm)",
      image: calendar,
      content: "Monday-Friday",
    },
    {
      id: 3,
      text: "Need help? Write to us",
      image: email,
      content: "cleanup@gmail.com",
    },
  ];

  return (
    <div className={"container-full"}>
      <div className={"container-xl"}>
        <Header />
        <h1 className={"explore"}>
          Meet a professional cleaning company,
          <br />
          you deserve the best
        </h1>
        <div className={"buttons"}>
          <button className={"dateButton"}>Book a date</button>
          <img className={"ellipse"} src={play} alt={"ellipse"} />
        </div>

        <div className={"help"}>
          {data.map((el) => (
            <LogoPage
              id={el.id}
              text={el.text}
              image={el.image}
              content={el.content}
            />
          ))}
        </div>
        <img className={"arrow"} src={downArrow1} alt={"down"} />
        <img src={kercher1} alt={"vacuums"} className={"karcher"} />
      </div>
    </div>
  );
};

export default HeroPage;
