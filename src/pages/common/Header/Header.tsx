import React from "react";
import { mainMenu } from "./model";
import { Link } from "react-router-dom";
import { SearchForm } from "../Forms/SearchForm/SearchForm";

interface IHeaderProps {
  [key: string]: any;
}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className="Header bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {mainMenu.map(({ link, title }) => {
                return (
                  <li key={link} className="nav-item active">
                    <Link to={link} className="nav-link">
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <SearchForm />
          </div>
        </nav>
      </div>
    </div>
  );
};
