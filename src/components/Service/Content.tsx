import React from "react";
import ContentWrapper from "./ContentWrapper";

export interface ContentWrap {
  id: number;
  image: string;
  text: string;
  content: string;
}

const Content = () => {
  const data: ContentWrap[] = [
    {
      id: 1,
      image: "home.svg",
      text: "House cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 2,
      image: "house2.svg",
      text: "Building cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 3,
      image: "beds3.svg",
      text: "Apartment cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },

    {
      id: 4,
      image: "Group4.svg",
      text: "Car cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 5,
      image: "wash5.svg",
      text: "Commercial cleaning",
      content:
        "You will have a team of professionals who are experts in their field",
    },
    {
      id: 6,
      image: "clean.svg",
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
