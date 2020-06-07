/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { IListItem } from "./interfaces";

interface ItablePatientProps {
  pacientList: Array<IListItem>,
  minAge: string,
  maxAge: string,
  [key: string]: any;
}

export const TablePatient: React.FC<ItablePatientProps> = ({
  pacientList,
  minAge,
  maxAge,
}) => {
  const [sortBy, setSortBy] = useState<string>("age");
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  useEffect(() => {
    byField()
  }, [byField, toggleSort])

  function byField() {
    if(toggleSort) {
      return (a: any, b: any) => (a[sortBy] > b[sortBy] ? -1 : 1);
    }else {
      return (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1);

    }
  }

  const sort = (field: string) => {
    setSortBy(field);

    setToggleSort(!toggleSort);
  }
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th
            scope="col"
            onClick={() => sort("name")}
            className={`cursPoint text-${sortBy !== 'name' ? "secondary" : "dark"}`}
          >
            ФИО 
             
          </th>
          <th
            scope="col"
            onClick={() => sort("age")}
            className={`cursPoint text-${sortBy !== 'age' ? "secondary" : "dark"}`}
          >
            Возраст
          </th>
          <th
            scope="col"
            onClick={() => sort("sex")}
            className={`cursPoint text-${sortBy !== 'sex' ? "secondary" : "dark"}`}
          >
            Пол
          </th>
        </tr>
      </thead>
      <tbody>
        {pacientList
          .filter((item) => item.age >= +minAge && item.age <= +maxAge)
          .sort(byField())
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
