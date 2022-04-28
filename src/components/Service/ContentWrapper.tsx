import React from "react";
import "./Service.css";
import { ContentWrap } from "./Content";
import "./ContentWrapper.css";

const ContentWrapper: React.FC<ContentWrap> = (props) => {
  return (
    <div className={"cleaning"}>
      <img className={"cleanWash"} src={props.image} alt={"wash"} />
      <p>{props.text}</p>
      <p className={"text"}>{props.content}</p>
    </div>
  );
};

export default ContentWrapper;
