import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const [morseChange, setMorseChange] = useState("");
  const handleChageText = (e) => {
    setText(e.target.value);
  };

  // 「ー」を入力
  const handleAddDash = () => {
    setText(text + "ー");
  };

  // 「・」を入力
  const handleAddDot = () => {
    setText(text + "・");
  };

  // モールス信号を変換
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

  //　文字クリア
  const handleClear = () => {
    setText("");
    setMorseChange("");
  };

  // 1文字削除
  const handleOneCharacterDelete = () => {
    setText(text.slice(0, -1));
  };

  return (
    <div className="App">
      <input value={text} onChange={handleChageText} />
      <Button1 onClick={handleAddDash}>ー</Button1>
      <Button1 onClick={handleAddDot}>・</Button1>
      <br />
      <button onClick={handleMorse}>変換</button>
      <button onClick={handleOneCharacterDelete}>1文字削除</button>
      <button onClick={handleClear}>クリア</button>
      <br />
      {morseChange}
    </div>
  );
}

const Button1 = styled.button`
  margin-left: 10px;
`;
