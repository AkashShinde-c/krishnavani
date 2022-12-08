import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../CSS/NavBar.css";
import Menu from "./Menu";
import SpecificShlok from "./SpecificShlok";

export default function NavBar(props) {
  var [languageNav, setLanguageNav] = useState("Hindi");
  var toggle = false;

  useEffect(() => {
    props.setLanguageApp(languageNav);
  }, [languageNav]);

  function setTrigger() {
    toggle ? (toggle = false) : (toggle = true);
    props.sendTrigger(toggle);
  }
  return (
    <>
      <div className="navBar">
        <h1>KRISHNAVANI</h1>
        <Menu setTrigger={setTrigger} setLanguageNav={setLanguageNav}></Menu>
      </div>
    </>
  );
}
