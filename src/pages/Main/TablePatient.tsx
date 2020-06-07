import React from "react";
import { IListItem } from "./interfaces";
import { byField } from "./utils";

interface ItablePatientProps {
  pacientList: Array<IListItem>,
  setSortBy: (sortBy: string) => void, 
  minAge: string,
  maxAge: string,
  sortBy: string,
  [key: string]: any;
}

export const TablePatient: React.FC<ItablePatientProps> = ({
  pacientList,
  setSortBy,
  minAge,
  maxAge,
  sortBy,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th
            scope="col"
            onClick={() => setSortBy("name")}
            className="cursPoint"
          >
            ФИО
          </th>
          <th
            scope="col"
            onClick={() => setSortBy("age")}
            className="cursPoint"
          >
            Возраст
          </th>
          <th
            scope="col"
            onClick={() => setSortBy("sex")}
            className="cursPoint"
          >
            Пол
          </th>
        </tr>
      </thead>
      <tbody>
        {pacientList
          .filter((item) => item.age >= +minAge && item.age <= +maxAge)
          .sort(byField(sortBy))
          .map((item, i) => {
            return (
              <tr key={item.id}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
