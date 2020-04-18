import React, { useState, useEffect } from "react";
import { mainMenu } from "./model";
import { Link } from "react-router-dom";
import "./Header.scss";

interface IHeaderProps {
  [key: string]: any;
}

export const Header: React.FC<IHeaderProps> = () => {
  const [activeMenu, setActiveMenu] = useState<string>(
    window.location.hash.slice(1)
  );
  const [r, setR] = useState<boolean>(false);

  useEffect(() => {
    setActiveMenu(window.location.hash.slice(1));
  }, [r]);

  console.log(activeMenu);
  return (
    <nav className="nav flex-column">
      {mainMenu.map(({ link, title, subMenu }) => {
        const actMenu = activeMenu === link ? "text-dark" : "";

        return (
          <Link
            to={link}
            key={link}
            className={`nav-link ${actMenu}`}
            onClick={() => setR(!r)}
          >
            {title}
            {Array.isArray(subMenu) &&
              subMenu?.map(({ link, title }) => {
                const activeSubMenu = activeMenu === link ? "text-success" : "";

                return (
                  <Link
                    to={link}
                    key={link}
                    className={`nav-link ${activeSubMenu}`}
                    // onClick={() => onHandlerActiveMenu(link)}
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
