import React from "react";
import { useState } from "react";
import "../CSS/Menu.css";

var language = "Hindi";
export default function Menu(props) {
  var [showToggle, setShowToggle] = useState("menu");
  var [showSearchButton, setShowSearchButton] = useState("searchShlok");
  var [ToggleBtn, setToggleBtn] = useState("ToggleBtn");
  
  function showMenu() {
    showToggle == "menu" ? setShowToggle("menuClicked") : setShowToggle("menu");
  }
  function showSearch() {
    showSearchButton == "searchShlok"
      ? setShowSearchButton("showSearch")
      : setShowSearchButton("searchShlok");

    ToggleBtn == "ToggleBtn"
    ? setToggleBtn("ToggleBtn2")
    : setToggleBtn("ToggleBtn");  
  }

  function switchLanguage(){
     if(language === "Hindi"){
      props.setLanguageNav("English")
      language = "English"
     }
     else{
      props.setLanguageNav("Hindi");
      language = "Hindi"
     }
    
  }
  return (
    <>
      <div className="menuIcon" onClick={() => (showMenu(), showSearch())}>
        <div className="firstL"></div>
        <div className="secondL"></div>
        <div className="thirdL"></div>
      </div>
      <div className={showToggle}>
        <button
          className={showSearchButton}
          onClick={() => (props.setTrigger(), showMenu(), showSearch())}
        >
          Search Shlok
        </button>
        <div className= {ToggleBtn}>
          <div className="English">English</div>
          <input type="checkbox" onChange={()=>(switchLanguage(),showMenu(),showSearch())} id="switch" />
          <label for="switch">Toggle</label>
          
        </div>
      </div>
    </>
  );
}
