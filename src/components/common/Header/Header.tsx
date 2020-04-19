import React, { useState, useEffect } from "react";
import { mainMenu } from "./model";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<Array<string> | string>(
    window.location.hash.slice(1)
  );
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    setActiveMenu(window.location.hash.split("/"));
  }, [reload]);

  return (
    <nav className="nav flex-column">
      {mainMenu.map(({ link, title, subMenu }) => {
        const actMenu = `/${activeMenu[1]}` === link ? "text-dark" : "";

        return (
          <div key={link} onClick={() => setReload(!reload)}>
            <Link to={link} key={link} className={`nav-link ${actMenu}`}>
              {title}
            </Link>
            {Array.isArray(subMenu) &&
              `/${activeMenu[1]}` === link &&
              subMenu?.map(({ link, title }) => {
                const activeSubMenu =
                  `/${activeMenu[1]}/${activeMenu[2]}` === link
                    ? "text-success"
                    : "";

                return (
                  <Link
                    to={link}
                    key={link}
                    className={`nav-link ${activeSubMenu}`}
                  >
                    {title}
                  </Link>
                );
              })}
          </div>
        );
      })}
    </nav>
  );
};
