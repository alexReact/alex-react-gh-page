import React, { useState } from "react";
import { mainMenu } from "./model";
import { Link } from "react-router-dom";
import { SearchForm } from "../Forms/SearchForm/SearchForm";
import "./Header.scss";
import cls from "classnames";

interface IHeaderProps {
  [key: string]: any;
}

export const Header: React.FC<IHeaderProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navCollapse = cls("collapse navbar-collapse", {
    show: showMenu,
    "bg-light": showMenu,
  });

  return (
    <div className="Header bg-light position-fixed w-100">
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
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={navCollapse} id="navbarSupportedContent">
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
