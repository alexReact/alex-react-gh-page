import React, { Suspense, lazy } from "react";
import { Switch, Route, HashRouter, Link } from "react-router-dom";

const Main = lazy(() => import("./pages/Main/Main"));
const About = lazy(() => import("./pages/About/About"));
const English = lazy(() => import("./pages/English/English"));

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <div className="App-header">
          <ul>
            <li>
              <Link to="/" className="Menu-link">
                Main
              </Link>
            </li>
            <li>
              <Link to="/english" className="Menu-link">
                English
              </Link>
            </li>
            <li>
              <Link to="/aboute" className="Menu-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="App-mainContent">
          <Suspense fallback={null}>
            <Switch>
              <Route path="/aboute" component={About} />
              <Route path="/english" component={English} />
              <Route path="/" component={Main} />
            </Switch>
          </Suspense>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
