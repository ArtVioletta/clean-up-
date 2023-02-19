import React from "react";
import ContentWrapper from "./ContentWrapper";
import home from "../../../assets/svg/home.svg";
import beds3 from "../../../assets/svg/beds3.svg";
import house2 from "../../../assets/svg/house2.svg";
import Group4 from "../../../assets/svg/Group4.svg";
import wash5 from "../../../assets/svg/wash5.svg";
import clean from "../../../assets/svg/clean.svg";
import { IContentWrap } from "../../../shared/interfaces/IContentWrap";

const Content = () => {
  const data: IContentWrap[] = [
    {
      id: 1,
      image: home,
      text: "House cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 2,
      image: house2,
      text: "Building cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 3,
      image: beds3,
      text: "Apartment cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },

    {
      id: 4,
      image: Group4,
      text: "Car cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 5,
      image: wash5,
      text: "Commercial cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 6,
      image: clean,
      text: "After renovation",
      content:
        "You will have a team of professionals who are experts in their field",
    },
  ];
  return (
    <div className={"contentWrapp"}>
      {data.map((el) => (
        <ContentWrapper
          id={el.id}
          image={el.image}
          text={el.text}
          content={el.content}
        />
      ))}
    </div>
  );
};

export default Content;
