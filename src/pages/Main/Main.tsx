import React, { useEffect, useState } from "react";
import { list } from "./model";
import "./Main.scss";

export default function Main() {
  const [pacientList, setPacientList] = useState<
    Array<{ id: number; name: string; age: number; sex: string }>
  >([]);
  const [minAge, setMinAge] = useState<string>("0");
  const [maxAge, setMaxAge] = useState<string>("120");
  // const [searchVal, setSearchVal] = useState<string>("");

  useEffect(() => {
    let listPatient: {
      id: number;
      name: string;
      age: number;
      sex: string;
    }[] = [];

    list.forEach((item, i) => {
      const reg = /([^\)]+)\((.*)\)/;
      const patient = item["Пацієнт"].match(reg);
      const a = patient![2].match(/\d+/g);
      const pat = patient![1];
      const age = a;
      listPatient.push({
        id: i,
        name: pat.trim(),
        age: +age![0],
        sex: item["Стать"],
      });
    });

    setPacientList(listPatient);
  }, []);

  // useEffect(() => {
  //   if(searchVal.trim() === '') {

  //   }

  // }, [searchVal])

  return (
    <div className="Main">
      <div>Total: {list.length}</div>

      <div className="inputWrap">
        <label>
          from
          <input
            type="text"
            value={minAge}
            onChange={({ target: { value } }) => setMinAge(value)}
          />
        </label>
        <label>
          to
          <input
            type="text"
            value={maxAge}
            onChange={({ target: { value } }) => setMaxAge(value)}
          />
        </label>
        {/* 
        <label>
          search
          <input
            type="text"
            value={searchVal}
            className='search'
            onChange={({ target: { value } }) => setSearchVal(value)}
          />
        </label> */}

        <div className="amount">
          {
            pacientList.filter(
              (item) => item.age >= +minAge && item.age <= +maxAge
            ).length
          }
        </div>
      </div>

      <div className="patientWrap">
        {/* <ul>
          {pacientList.map((item, i) => {
            return (
              <li key={item.id}>
                {item.id}. {item.name} ===> {item.age} year
              </li>
            );
          })}
        </ul> */}

        {/* <ul>
          {pacientList
            .sort((a, b) => b.age - a.age)
            .map((item, i) => {
              return (
                <li key={item.id}>
                  {item.name} ===> {item.age} year
                </li>
              );
            })}
        </ul>

        <ul>
          {pacientList
            .sort((a, b) => a.age - b.age)
            .map((item, i) => {
              return (
                <li key={item.id}>
                  {item.name} ===> {item.age} year
                </li>
              );
            })}
        </ul> */}

        <ul>
          {pacientList
            .filter((item) => item.age >= +minAge && item.age <= +maxAge)
            .sort((a, b) => a.age - b.age)
            .map((item, i) => {
              return (
                <li key={item.id}>
                  {i + 1} = <b>{item.name}</b> ===> <b>{item.age}</b> лет /{" "}
                  {item.sex}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
