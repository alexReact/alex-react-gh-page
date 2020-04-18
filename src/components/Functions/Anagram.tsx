// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// finder and Friend

import React, { useState } from "react";
import { useEffect } from "react";

const Anagram = () => {
  const [inputVal, setInputVal] = useState<string>("finder");
  const [inputVal2, setInputVal2] = useState<string>("Friend");
  const [result, setResult] = useState<string>("Friend");

  useEffect(() => {
    anagram(inputVal, inputVal2);
  }, [inputVal, inputVal2]);

  const anagram = (string1: string, string2: string) => {
    const str1: Array<string> = string1
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("");
    const str2: Array<string> = string2
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("");

    if (str1.length !== str2.length) {
      setResult("Нет, это не анаграма");
      return;
    }

    const first = str1.filter((i) => str2.includes(i)).length === str1.length;
    const second = str2.filter((i) => str1.includes(i)).length === str2.length;

    first && second
      ? setResult("Да, это анаграма")
      : setResult("Нет, это не анаграма");
  };

  return (
    <div className="Anagram">
      <h3>Anagram</h3>
      <input
        type="text"
        name="first"
        value={inputVal}
        onChange={({ target: { value } }) => setInputVal(value)}
      />
      <input
        type="text"
        name="second"
        value={inputVal2}
        onChange={({ target: { value } }) => setInputVal2(value)}
      />

      <div>Result: {result}</div>
    </div>
  );
};

export default Anagram;
