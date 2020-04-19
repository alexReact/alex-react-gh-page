import React, { useState } from "react";

interface ITabsProps {
  [key: string]: any;
}

export const Tabs: React.FC<ITabsProps> = ({ react, js }) => {
  const [activeTab, setActiveTab] = useState<string>("react");
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={() => setActiveTab("react")}>
          <span className={`nav-link ${activeTab === "react" ? "active" : ""}`}>
            React
          </span>
        </li>
        <li className="nav-item" onClick={() => setActiveTab("js")}>
          <span className={`nav-link ${activeTab === "js" ? "active" : ""}`}>
            Vanilla JS
          </span>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeTab === "react" ? "show active" : ""
          }`}
          role="tabpanel"
        >
          <pre>{react}</pre>
        </div>
        <div
          className={`tab-pane fade ${activeTab === "js" ? "show active" : ""}`}
          role="tabpanel"
        >
          <pre>{js}</pre>
        </div>
      </div>
    </>
  );
};
