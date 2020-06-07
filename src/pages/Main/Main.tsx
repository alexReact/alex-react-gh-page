import React, { useEffect, useState } from "react";
import { list } from "./model";
import "./Main.scss";
import { listPatient } from "./utils";
import { IListItem } from "./interfaces";
import { TablePatient } from "./TablePatient";

export default function Main() {
  const [staticList, setStaticList] = useState<Array<IListItem>>([]);
  const [pacientList, setPacientList] = useState<Array<IListItem>>([]);
  const [minAge, setMinAge] = useState<string>("0");
  const [maxAge, setMaxAge] = useState<string>("120");

  useEffect(() => {
    setPacientList(listPatient);
    setStaticList(listPatient);
  }, []);

  const resetAgeRange = () => {
    setMinAge('0')
    setMaxAge('120')
  }

  return (
    <div className="Main container-fluid">
      <h3 className="text-center">
        Количесво пациентов: <span className="text-primary">{list.length}</span>
      </h3>
      <div className="input-group col-6 mr-auto mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Возраст от и до</span>
        </div>
        <input
          type="number"
          value={minAge}
          onChange={({ target: { value } }) => setMinAge(value)}
          aria-label="From"
          className="form-control"
        />
        <input
          type="number"
          value={maxAge}
          onChange={({ target: { value } }) => setMaxAge(value)}
          aria-label="To"
          className="form-control"
        />
         <div className="input-group-prepend">
          <button className='btn btn-danger' onClick={resetAgeRange}>Сброс</button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
        <TablePatient 
           pacientList={pacientList}
           minAge={minAge}
           maxAge={maxAge}
        />
        </div>

        <div className="col-6">
          <ul className="list-group">
            <li className="list-group-item active">
              Количество пациентов по возросту
            </li>

            {Array(100)
              .fill("")
              .map((item, i: number) => {
                const arr = staticList.filter((item) => item.age === i);
                const men = arr.filter((item) => item.sex === "Муж");
                const women = arr.filter((item) => item.sex === "Жен");
                return (
                  <li key={i} className="list-group-item d-flex justify-content-between">
                    <span className="font-weight-bold">
                      {i === 0 ? "До 1 года" : `До ${i + 1} лет`}
                    </span>
                    <span className="ml-3">{arr.length} чел</span>
                    <span className="ml-3">
                      ({men.length} - муж и {women.length} - жен )
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
