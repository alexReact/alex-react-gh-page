import React, { useState, useEffect } from "react";
// import { words1000 } from "./words";
// localStorage.setItem('w1000', JSON.stringify(words1000));

export default function English() {
  const [words, setWords] = useState<Array<string>>([]);

  useEffect(() => {
    const getWord = JSON.parse(localStorage.getItem('w1000') || '');
    setWords(getWord)
  }, [])

  useEffect(() => {
    localStorage.setItem('w1000', JSON.stringify(words));
  }, [words])

  const onRemoveWord = (word: string) => {
    const copyArrWord = words;
    ;
    setWords(copyArrWord.filter(item => item !== word));
  }

  return (
    <div>
      <h1>English</h1>
      <ul>
        {words.map((item, i) => (
          <li key={`${i}-${item}`}>
            {i + 1} - {item}
            <button onClick={() => onRemoveWord(item)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
