import React from "react";
import { mainMenu } from "./model";
import { Link } from "react-router-dom";

interface IHeaderProps {
  [key: string]: any;
}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className="Header">
      <ul>
        {mainMenu.map(({ link, title }) => {
          return (
            <li key={link}>
              <Link to={link} className="Menu-link">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
