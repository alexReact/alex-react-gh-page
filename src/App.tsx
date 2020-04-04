import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

const Main = React.lazy(() => import("./pages/Main/Main"));
const About = React.lazy(() => import("./pages/About/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <ul>
            <li>
              <NavLink
                to="/"
                exact={true}
                className="Menu-link"
                activeClassName="Menu-link-active"
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboute"
                className="Menu-link"
                activeClassName="Menu-link-active"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="App-mainContent">
          <Suspense fallback={null}>
            <Switch>
              <Route path="/aboute" component={About} />
              <Route path="/" component={Main} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
