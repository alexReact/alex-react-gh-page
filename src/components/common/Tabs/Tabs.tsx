import React, { useState } from "react";

interface ITabsProps {
  [key: string]: any;
}

export const Tabs: React.FC<ITabsProps> = ({ code }) => {
  const [activeTab, setActiveTab] = useState<string>(code[0].title);
  return (
    <>
      <ul className="nav nav-tabs">
        {code.map(({ title }: any, i: number) => {
          return (
            <li
              key={i}
              className="nav-item"
              onClick={() => setActiveTab(title)}
            >
              <span
                className={`nav-link ${activeTab === title ? "active" : ""}`}
              >
                {title}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="tab-content" id="myTabContent">
        {code.map(({ code, title }: any, i: number) => {
          return (
            <div
              key={i}
              className={`tab-pane fade ${
                activeTab === title ? "show active" : ""
              }`}
              role="tabpanel"
            >
              <pre>{code}</pre>
            </div>
          );
        })}
      </div>
    </>
  );
};
