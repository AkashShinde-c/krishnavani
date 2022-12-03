import React from "react";
import "../CSS/ShlokMeaning.css";

export default function ShlokMeaning(props) {
  if (props.commentary) {
    return props.commentary ? (
      <>
        <div className="commentary">
          <p className="heading">Shlok Description</p>
          {props.commentary}
        </div>
      </>
    ) : (
      ""
    );
  } else {
    return props.translation ? (
      <>
        <div className="shlokMeaning">
          <p className="heading">Shlok Meaning</p>
          {props.translation}
        </div>
      </>
    ) : (
      <>
        <p className="shlok__text" style={{ fontSize: "3.7rem" }}>||</p>
        <p className="shlok__text" style={{ fontSize: "3.7rem" }}>
          || श्रीभगवानुवाच ||
        </p>
        <p className="shlok__text" style={{ fontSize: "3.7rem" }}>||</p>
        <p className="shlok__text">Created By - Akash Shinde</p> <p className="shlok__text">Email - shindeakashak47@gmail.com</p>
      </>
    );
  }
}
