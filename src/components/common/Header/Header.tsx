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

  console.log(activeMenu);
  return (
    <nav className="nav flex-column">
      {mainMenu.map(({ link, title, subMenu }) => {
        const actMenu = `/${activeMenu[1]}` === link ? "text-dark" : "";

        return (
          <Link
            to={link}
            key={link}
            className={`nav-link ${actMenu}`}
            onClick={() => setReload(!reload)}
          >
            {title}
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
          </Link>
        );
      })}
    </nav>
  );
};
