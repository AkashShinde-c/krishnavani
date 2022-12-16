import React from "react";
import { useState } from "react";
import "../CSS/Menu.css";

var language = "Hindi";
export default function Menu(props) {
  var [showToggle, setShowToggle] = useState("menu");
  var [showSearchButton, setShowSearchButton] = useState("searchShlok");
  var [ToggleBtn, setToggleBtn] = useState("ToggleBtn");
  var [Blurr, setBlurr] = useState("blurrOff");
  
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

  function showBlurr(){
    Blurr === "blurrOff"
    ?setBlurr("blurrOn")
    :setBlurr("blurrOff");
  }
  return (
    <>
      <div className="menuIcon" onClick={() => (showMenu(), showSearch(),showBlurr())}>
        <div className="firstL"></div>
        <div className="secondL"></div>
        <div className="thirdL"></div>
      </div>
      <div className={Blurr} onClick = {()=>(showBlurr(),showMenu(),showSearch())}>
      <div className={showToggle}>
        <button
          className={showSearchButton}
          onClick={() => (props.setTrigger(), showMenu(), showSearch())}
        >
          Search Shlok
        </button>
        <div className= {ToggleBtn} >
          <div className="English">English</div>
          <input type="checkbox" onChange={()=>(switchLanguage() )} id="switch" />
          <label for="switch">Toggle</label>
          
        </div>
      </div>
      </div>
    </>
  );
}
