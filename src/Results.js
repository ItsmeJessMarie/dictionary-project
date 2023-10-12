import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <div className="Definition">
          {props.results.meanings.map(function (meaning, index) {
            return meaning.definition[0];
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
