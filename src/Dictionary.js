import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleSheCodesImagesResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let SheCodesImagesApiKey = "1bf547ta2a3986bceb80d3bcaob62269";
    let SheCodesImagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${SheCodesImagesApiKey}`;
    axios.get(SheCodesImagesApiUrl).then(handleSheCodesImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <p>What word would you like to look up?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="dictionary"
            />
          </form>
          <div className="hint">
            suggested words: sunset, elephant, yoga, plant...
          </div>
        </section>
        <Results results={results} />
        <Photos results={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
