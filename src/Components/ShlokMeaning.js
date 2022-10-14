import React from "react";
import "../CSS/ShlokMeaning.css";

export default function ShlokMeaning(props) {
  if (props.commentary) {
    return (
      <>
        <div className="commentary">
          <p className="heading">Shlok Description</p>
          {props.commentary}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="shlokMeaning">
          <p className="heading">Shlok Meaning</p>
          {props.translation}
        </div>
      </>
    );
  }
}
