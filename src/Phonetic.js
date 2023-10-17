import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio)
    return (
      <div className="Phonetic">
        <div className="phoneticText">{props.phonetic.text}</div>
        <audio
          autoplay
          class="react-audio-player"
          controls
          id
          preload="metadata"
          src={props.phonetic.audio}
          title="Phonetic audio"
        ></audio>
      </div>
    );
}
