import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Small function for DRYness
  const retPoppedArr = function (arr) {
    const newArr = [...arr];
    newArr.pop();
    return newArr;
  };

  // Move to new mode, replace current place in history if replace === true
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev) => {
      return replace ? [...retPoppedArr(prev), newMode] : [...prev, newMode];
    });
  };

  // Move back to previous mode in history
  const back = () => {
    if (history.lenght < 2) {
      return;
    }
    if(mode === "ERROR_SAVE" || mode === "ERROR_DELETE") {
      setMode(history[history.length - 3]);
    } else {
      setMode(history[history.length - 2]);
    }
    setHistory((prev) => retPoppedArr(prev));
  };
  return { mode, transition, back };
}
