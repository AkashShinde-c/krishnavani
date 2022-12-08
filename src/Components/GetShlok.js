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
var text;
var slug;
var wordMeanings;
var hindiTranslation;
var hindiCommentary;
var englishTranslation;
var englishCommentary;
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
  useEffect(() => {
    chapter = parseInt(props.chapter);
    slok = parseInt(props.slok);
    console.log(chapter + "/" + slok);
  }, [props.chapter, props.slok]);

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

  async function fetchShlok() {
    chapter = Math.floor(Math.random() * 17) + 1;
    slok = Math.floor(Math.random() * slokcount[chapter - 1]) + 1;
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${slok}/`;
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

  async function nextShlok() {
    slok += 1;
    if (slok > slokcount[chapter - 1]) {
      chapter += 1;
      slok = 1;
    }
    console.log(chapter + "/" + slok);
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${slok}/`;
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

  async function prevShlok() {
    console.log(chapter);
    slok -= 1;
    if (slok < 1) {
      chapter -= 1;
      slok = slokcount[chapter - 1];
    }
    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${slok}/`;
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

  return (
    <>
      <div className="btnAlign">
        <button className="GetShlok_Button" onClick={() => prevShlok()}>
          &lt;Prev shlok
        </button>
        <button className="GetShlok_Button" onClick={() => fetchShlok()}>
          Shlokastra
        </button>
        <button className="GetShlok_Button" onClick={() => nextShlok()}>
          Next shlok&gt;
        </button>
      </div>
    </>
  );
}
