import React, { useEffect } from "react";
import { useState } from "react";
import "../CSS/GetShlok.css";
import axios from "axios";
import da from "../Components/dd.json";

var chapter = 1,
slok = 0;
const slokcount = [
  47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
];
export default function GetShlok(props) {
  var url = "";
  var currentShlok = "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "27aef378demsh5fd1b481195b022p150838jsn3bcf590c9c97",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };
  useEffect(()=>{chapter = props.chapter
    slok = props.slok},[props.chapter])
  
  async function fetchShlok() {
    chapter = Math.floor(Math.random() * 17) + 1;
    slok = Math.floor(Math.random() * slokcount[chapter - 1]) + 1;
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${slok}/`;
    await axios.get(url, options).then((response) => {
      currentShlok = response.data;
      var translation = currentShlok.translations[5].description;
      var commentary = currentShlok.commentaries[13].description;
      props.sendShlok(
        currentShlok.text,
        currentShlok.slug,
        translation,
        currentShlok.word_meanings,
        commentary
      );
    });
  }

  async function nextShlok() {
    slok += 1;
    if (slok > slokcount[chapter - 1]) {
      chapter += 1;
      slok = 1;
    }
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${slok}/`;
    await axios.get(url, options).then((response) => {
      currentShlok = response.data;
      var translation = currentShlok.translations[5].description;
      var commentary = currentShlok.commentaries[13].description;
      props.sendShlok(
        currentShlok.text,
        currentShlok.slug,
        translation,
        currentShlok.word_meanings,
        commentary
      );
    });
  }

  async function prevShlok() {
    console.log(chapter)
    slok -= 1
    if (slok <1) {
      chapter -= 1;
      slok = slokcount[chapter - 1];
    }
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${slok}/`;
    await axios.get(url, options).then((response) => {
      currentShlok = response.data;
      var translation = currentShlok.translations[5].description;
      var commentary = currentShlok.commentaries[13].description;
      props.sendShlok(
        currentShlok.text,
        currentShlok.slug,
        translation,
        currentShlok.word_meanings,
        commentary
      );
    });
  }

  return (
    <>
    <div className="btnAlign">
      <button className="GetShlok_Button" onClick={() => prevShlok()}>
      &lt;= Shlok 
      </button>
      <button className="GetShlok_Button" onClick={() => fetchShlok()}>
        Shlokastra
      </button>
      <button className="GetShlok_Button" onClick={() => nextShlok()}>
      Shlok =&gt;
      </button>
      </div>
    </>
  );
}
