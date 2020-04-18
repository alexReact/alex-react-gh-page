import React, { Suspense, lazy } from "react";
import { Switch, Route, HashRouter, Link } from "react-router-dom";
import { Header } from "./pages/common/Header/Header";

const Main = lazy(() => import("./pages/Main/Main"));
const About = lazy(() => import("./pages/About/About"));
const English = lazy(() => import("./pages/English/English"));

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <div className="App-mainContent">
          <Suspense fallback={null}>
            <Switch>
              <Route path="/about" component={About} />
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
