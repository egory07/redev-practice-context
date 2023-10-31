import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const List = ({ propNames, propChange }) => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <ul className={theme}>
        {propNames.map((obj) => (
          <li key={obj.id}>{obj.body}</li>
        ))}
      </ul>
      <button className={theme} onClick={propChange}>
        !!!
      </button>
    </>
  );
};

export default List;
