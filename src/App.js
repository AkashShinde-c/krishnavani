import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Shlokdisplay } from "./Components/Shlokdisplay";
import GetShlok from "./Components/GetShlok";
import ShlokMeaning from "./Components/ShlokMeaning";
import background from "./img/background2.jpg";
import "./fonts/KANIKABI.ttf";
import NavBar from "./Components/NavBar";
import SpecificShlok from "./Components/SpecificShlok";
import Footer from "./Components/Footer";

function App() {
  var [shlok, setShlok] = useState("");
  var [shlok_no, setDesc] = useState("");
  var [translation, setTranslation] = useState("");
  var [word_meanings, setWordMeanings] = useState("");
  var [commentaries, setCommentaries] = useState("");
  var [trigger, setTrigger] = useState();
  var [chapter, setChapter] = useState(1);
  var [slok, setSlok] = useState(1);
  var sendShlok = (
    GetShlok_shlok,
    GetShlok_Number,
    GetShlok_Translation,
    GetWord_Meanings,
    GetShlok_Commentary
  ) => {
    setShlok(GetShlok_shlok);
    setDesc(GetShlok_Number);
    setTranslation(GetShlok_Translation);
    setWordMeanings(GetWord_Meanings);
    setCommentaries(GetShlok_Commentary);
  };

  var sendSlok = (chapter, slok, trigger) => {
    setChapter(chapter);
    setSlok(slok);
    setTrigger(trigger);
  };
  var sendTrigger = (trigger) => {
    setTrigger(trigger);
  };
  return (
    <>
      <NavBar sendTrigger={sendTrigger} />
      <SpecificShlok
        trigger={trigger}
        sendShlok={sendShlok}
        sendSlok={sendSlok}
        sendTrigger = {sendTrigger}
      ></SpecificShlok>
      <div className="mainContainer">
        <GetShlok sendShlok={sendShlok} chapter={chapter} slok={slok} />
        <div className="paper">
          <div className="subPaper">
            <div className="part1">
              <Shlokdisplay
                shlok_no={shlok_no}
                shlok={shlok}
                word_meanings={word_meanings}
              />
            </div>
            <div className="part2">
              <ShlokMeaning translation={translation} />
            </div>
          </div>
        </div>
        <div className="paper">
          <div className="subPaper">
            <ShlokMeaning commentary={commentaries} />
          </div>
        </div>
      </div>
      
    </>
  );
}
export default App;
