import React from "react";
import "../CSS/ShlokMeaning.css";

export default function ShlokMeaning(props) {
  if (props.commentary) {
    return props.commentary ? (
      <>
        <div className="commentary">
          <p className="headingSD">Shlok Description</p>
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
        {/* <p className="shlok__text" style={{ fontSize: "3.7rem" }}>
          ||
        </p> */}
        <p className="shlok__text" style={{ fontSize: "3.4rem" }}>
          || श्रीमदभगवदगीता ||
        </p>
        {/* <p className="shlok__text" style={{ fontSize: "3.7rem" }}>
          ||
        </p> */}
        <button
          className="GetShlok_Button"
          onClick={() => (props.setStart("Changed")/*, props.setInitialHeight("fit-content")*/)}
        >
          Start Reading
        </button>
        <p className="shlok__text">Created By - Akash Shinde</p>{" "}
        <p className="shlok__text">Email - shindeakashak47@gmail.com</p>
      </>
    );
  }
}
