import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const [morseChange, setMorseChange] = useState("");
  const handleChageText = (e) => {
    setText(e.target.value);
  };
  const handleAddDash = () => {
    setText(text + "ー");
  };
  const handleAddDot = () => {
    setText(text + "・");
  };

  const handleMorse = () => {
    if (text === "・ー") {
      setMorseChange("A");
    } else if (text === "ー・・・") {
      setMorseChange("B");
    } else if (text === "ー・ー・") {
      setMorseChange("C");
    } else if (text === "ー・・") {
      setMorseChange("D");
    } else if (text === "・") {
      setMorseChange("E");
    } else if (text === "・・ー・") {
      setMorseChange("F");
    } else if (text === "ーー・") {
      setMorseChange("G");
    } else if (text === "・・・・") {
      setMorseChange("H");
    } else if (text === "・・") {
      setMorseChange("I");
    } else if (text === "・ーーー") {
      setMorseChange("J");
    } else if (text === "ー・ー") {
      setMorseChange("K");
    } else if (text === "・ー・・") {
      setMorseChange("L");
    } else if (text === "ーー") {
      setMorseChange("M");
    } else if (text === "ー・") {
      setMorseChange("N");
    } else if (text === "ーーー") {
      setMorseChange("O");
    } else if (text === "・ーー・") {
      setMorseChange("P");
    } else if (text === "ーー・ー") {
      setMorseChange("Q");
    } else if (text === "・ー・") {
      setMorseChange("R");
    } else if (text === "・・・") {
      setMorseChange("S");
    } else if (text === "ー") {
      setMorseChange("T");
    } else if (text === "・・ー") {
      setMorseChange("U");
    } else if (text === "・・・ー") {
      setMorseChange("V");
    } else if (text === "・ーー") {
      setMorseChange("W");
    } else if (text === "ー・・ー") {
      setMorseChange("X");
    } else if (text === "ー・ーー") {
      setMorseChange("Y");
    } else if (text === "ーー・・") {
      setMorseChange("Z");
    } else {
      setMorseChange(
        "アルファベットに変換できるモールス信号を入力して下さい。"
      );
    }
  };

  const handleClear = () => {
    setText("");
    setMorseChange("");
  };

  return (
    <div className="App">
      <input value={text} onChange={handleChageText} />
      <button onClick={handleAddDash}>ー</button>
      <button onClick={handleAddDot}>・</button>
      <button onClick={handleMorse}>変換</button>
      <button onClick={handleClear}>クリア</button>
      <br />
      {morseChange}
    </div>
  );
}
