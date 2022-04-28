import React from 'react';
import "./HeroPage.css";
import Header from "./Header";
import {LogoPage} from "./LogoPage";

export interface LogoItem{
  id: number;
  image: string;
  text: string;
  content: string;

}

const HeroPage = () => {

  const data:LogoItem[] = [
    {id: 1, text: "Have questions ? Call us", image: "call.svg", content: "(629) 555-0129"},
    {id: 2, text: "We are open from (8:00am - 5pm)", image: "calendar.svg",   content: "Monday-Friday"},
    {id: 3, text: "Need help? Write to us", image: "email.svg", content: "cleanup@gmail.com"},
  ]

  return (
    <div className={"container-full"}>
      <div className={"container-xl"}>
        <Header/>
        <h1 className={"explore"}>
          Meet a professional cleaning company,<br/>
          you deserve the best
        </h1>
        <div className={"buttons"}>
          <button className={"dateButton"}>Book a date</button>
          <img className={"ellipse"} src={"play.svg"} alt={"ellipse"}/>

        </div>

        <div className={"help"}>
          {data.map(el =>
            <LogoPage
              id={el.id}
              text={el.text}
              image={el.image}
              content={el.content}
            />)}
        </div>
        <img className={"arrow"} src={"downArrow1.svg"} alt={"down"}/>
        <img src={"kercher1.png"} alt={"vacuums"} className={"karcher"}/>
      </div>
  </div>
  );
};

export default HeroPage;