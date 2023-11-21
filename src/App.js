import React, { useState, useRef, createContext, useContext } from "react";
import List from "./List";
import "./App.css";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [names, setNames] = useState([
    { id: 1, body: "Паша" },
    { id: 2, body: "Маша" },
    { id: 3, body: "Коля" },
  ]);
  const [theme, setTheme] = useState("light-theme");

  const addElem = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    let newLi = { id: Date.now(), body: inputValue };
    setNames([...names, newLi]);
    setInputValue("");
  };

  const changeElem = (e) => {
    e.preventDefault();
    const newNames = names.map((obj) => {
      return {
        ...obj,
        body: obj.body + "!!!",
      };
    });
    setNames(newNames);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  // const changeTheme = () => {
  //   theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  // };

  const changeTheme = (e) => {
    e.target.value === "light-theme"
      ? setTheme("light-theme")
      : setTheme("dark-theme");
    console.log(e.target.value);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div id="app" className={theme}>
        Темы:
        <form onChange={changeTheme}>
          <label>
            <input type="radio" value="light-theme" name="contact" />
            {/* Когда ставлю аттрубут checked он ругается и не хочет корректно работать. Пишет про контролируемые и неконтр инпуты.  */}
            Светлая
          </label>

          <br />
          <label>
            <input type="radio" value="dark-theme" name="contact" />
            Темная
          </label>
        </form>
        <h1>Сотрудники:</h1>
        <List propNames={names} propChange={changeElem} />
        <br />
        <br />
        <form onSubmit={addElem}>
          <input
            className={theme}
            type="text"
            placeholder="Добавить имя"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <button
          style={{ marginTop: "5px" }}
          className={theme}
          onClick={focusInput}
        >
          Выбрать поле
        </button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
