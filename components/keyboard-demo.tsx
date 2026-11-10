"use client";

import { useState } from "react";

const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const languages = ["English", "සිංහල", "தமிழ்", "한국어", "日本語"];

export function KeyboardDemo() {
  const [value, setValue] = useState("");
  const [shift, setShift] = useState(false);
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("violet");

  function insert(text: string) {
    setValue((current) => current + (shift ? text.toUpperCase() : text));
    if (shift && text.length === 1) setShift(false);
  }

  function backspace() {
    setValue((current) => current.slice(0, -1));
  }

  return (
    <section className={`keyboard-demo theme-${theme}`} aria-label="Interactive English keyboard demo">
      <div className="demo-toolbar">
        <label>Language
          <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose preview language">
            {languages.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>Theme
          <select value={theme} onChange={(event) => setTheme(event.target.value)} aria-label="Choose keyboard theme">
            <option value="violet">Electric violet</option>
            <option value="coral">Coral pop</option>
            <option value="mint">Mint glow</option>
          </select>
        </label>
      </div>
      <textarea className="demo-input" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Tap a key or type here..." aria-label="Keyboard demo text input" />
      <div className="demo-keys" role="group" aria-label="On-screen keyboard">
        {rows.map((row, index) => (
          <div className="key-row" key={row}>
            {index === 2 && <button className="demo-key utility" type="button" onClick={() => setShift(!shift)} aria-pressed={shift}>⇧ Shift</button>}
            {row.split("").map((key) => <button className="demo-key" type="button" key={key} onClick={() => insert(key)}>{shift ? key.toUpperCase() : key}</button>)}
            {index === 2 && <button className="demo-key utility" type="button" onClick={backspace} aria-label="Backspace">⌫</button>}
          </div>
        ))}
        <div className="key-row">
          <button className="demo-key utility" type="button" onClick={() => setValue("")}>Clear</button>
          <button className="demo-key space" type="button" onClick={() => insert(" ")}>Space</button>
          <button className="demo-key utility" type="button" onClick={() => insert("\n")}>Enter</button>
        </div>
      </div>
      <p className="demo-footnote">This browser demo uses an English QWERTY layout. Language choices preview the planned language set; native-language input is not implemented here.</p>
    </section>
  );
}