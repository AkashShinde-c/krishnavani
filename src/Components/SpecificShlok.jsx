import React, { useRef } from "react";
import axios from "axios";
import "../CSS/SpecificShlok.css";

export default function SpecificShlok(props) {
  const chapterRef = useRef(null);
  const shlokRef = useRef(null);

  var url = "";
  var currentShlok = "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "27aef378demsh5fd1b481195b022p150838jsn3bcf590c9c97",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };
  async function searchShlok() {
    var chapter = parseInt(chapterRef.current.value);
    var shlok = parseInt(shlokRef.current.value);

    url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${shlok}/`;
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
      props.sendSlok(chapter,shlok);
    });
  }
  return props.trigger ? (
    <>
      <div className="popupForm">
        Chapter: <input type="text" ref={chapterRef} />
        Shlok: <input type="text" ref={shlokRef} />
        <button className="searchBtn" onClick={() => searchShlok()}>
          Search
        </button>
      </div>
    </>
  ) : (
    ""
  );
}
