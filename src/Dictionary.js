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
  let [error, setError] = useState(null);

  function handleDictionaryResponse(response) {
    if (response.data.meanings) {
      setError(null);
      setResults(response.data);
    } else {
      setError(
        <em>
          <strong>
            <center>Sorry, we do not have a definition for that word!</center>
          </strong>
        </em>
      );
    }
  }

  function handleImagesResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    // https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "1bf547ta2a3986bceb80d3bcaob62269";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let SheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(SheCodesApiUrl).then(handleImagesResponse);
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
              placeholder="Dictionary"
            />
          </form>
          <div className="hint">
            suggested words: sunset, elephant, yoga, plant...
          </div>
        </section>
        {!error ? (
          <>
            <Results results={results} />
            <Photos results={photos} />
          </>
        ) : (
          <>{error}</>
        )}
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
