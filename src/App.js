import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ð": "smiling",
  "ð": "face with tears of joy",
  "ð": "smiling face upside down",
  "ð": "smirking",
  "ðĪĐ": "star struck",
  "ðĪŠ": "zany face",
  "ð": "squinting face with tongue",
  "ðĪ": "zipper mouth face",
  "ðĪ": "hugging face",
  "ð": "neutral face"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    setmeaning(meaning);
    if (meaning === undefined) {
      setmeaning("not in database");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <h2>Check out my emojipedia</h2>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
