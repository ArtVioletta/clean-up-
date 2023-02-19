import React from "react";
import "./Service.css";
import "./ContentWrapper.css";
import { IContentWrap } from "../../../shared/interfaces/IContentWrap";

const ContentWrapper: React.FC<IContentWrap> = (props) => {
  return (
    <div className={"cleaning"}>
      <img className={"cleanWash"} src={props.image} alt={"wash"} />
      <p>{props.text}</p>
      <p className={"text"}>{props.content}</p>
    </div>
  );
};

export default ContentWrapper;
