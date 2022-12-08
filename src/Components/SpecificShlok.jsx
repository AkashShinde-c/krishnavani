import React, { useRef } from "react";
import axios from "axios";
import "../CSS/SpecificShlok.css";
import { useState } from "react";
import { useEffect } from "react";

const slokcount = [
  47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
];

const chaptercount = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
var selectedChapter = 6;
var text;
var slug;
var wordMeanings;
var hindiTranslation;
var hindiCommentary;
var englishTranslation;
var englishCommentary;
export default function SpecificShlok(props) {
  const chapterRef = useRef(null);
  const shlokRef = useRef(null);
  const errorMsg = useRef(null);

  var [isChSelected, setChSelected] = useState(false);

  useEffect(() => {
    if (props.language == "Hindi") {
      props.sendShlok(
        text,
        slug,
        hindiTranslation,
        wordMeanings,
        hindiCommentary
      );
    } else {
      props.sendShlok(
        text,
        slug,
        englishTranslation,
        wordMeanings,
        englishCommentary
      );
    }
  }, [props.language]);

  var url = "";
  var currentShlok = "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "27aef378demsh5fd1b481195b022p150838jsn3bcf590c9c97",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };
  async function searchShlok(e, selectedChapter) {
    var chapter = selectedChapter;
    var shlok = e.target.value;
    setChSelected(false);
    console.log(props.language);
    props.sendSlok(chapter, shlok, false);
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${shlok}/`;
    await axios.get(url, options).then((response) => {
      currentShlok = response.data;
      hindiTranslation = currentShlok.translations[5].description;
      hindiCommentary = currentShlok.commentaries[13].description;
      englishTranslation = currentShlok.translations[2].description;
      englishCommentary = currentShlok.commentaries[15].description;
      text = currentShlok.text;
      slug = currentShlok.slug;
      wordMeanings = currentShlok.word_meanings;
      if (props.language == "Hindi") {
        props.sendShlok(
          currentShlok.text,
          currentShlok.slug,
          hindiTranslation,
          currentShlok.word_meanings,
          hindiCommentary
        );
      } else {
        props.sendShlok(
          currentShlok.text,
          currentShlok.slug,
          englishTranslation,
          currentShlok.word_meanings,
          englishCommentary
        );
      }
    });
  }

  function handleClick(event) {
    selectedChapter = event.target.value;

    setChSelected(true);
  }

  if (props.trigger & !isChSelected) {
    return (
      <>
        <div className="blurr" onClick={() => props.sendTrigger(false)}></div>
        <div className="popupForm">
          <h3>Select Chapter</h3>
          {/* <input type="text" ref={chapterRef} />
        Shlok: <input type="text" ref={shlokRef} /> */}
          <div className="chapters">
            {chaptercount.map((ch) => (
              <button
                key={ch}
                className="chapterBtn"
                value={ch}
                onClick={(e) => handleClick(e)}
              >
                {ch}
              </button>
            ))}
          </div>

          <p className="errorMsg" ref={errorMsg}></p>
        </div>
      </>
    );
  } else if (props.trigger & isChSelected) {
    return (
      <>
        <div
          className="blurr"
          onClick={() => (props.sendTrigger(false), setChSelected(false))}
        ></div>
        <div className="popupForm">
          <h3>Select Shlok</h3>
          <div className="chapters">
            {[...Array(slokcount[selectedChapter - 1])].map((e, sl) => (
              <button
                key={sl + 1}
                className="shlokBtn"
                value={sl + 1}
                onClick={(e) => (
                  searchShlok(e, selectedChapter), props.sendTrigger(false)
                )}
              >
                {sl + 1}
              </button>
            ))}
            <button onClick={() => setChSelected(false)} className="backBtn">
              Go Back
            </button>
          </div>
        </div>
      </>
    );
  } else return "";
}
