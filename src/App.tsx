import React, { Suspense, lazy } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Header } from "./components/common/Header/Header";
import "./App.scss";

const Main = lazy(() => import("./pages/Main/Main"));
const About = lazy(() => import("./pages/About/About"));
const English = lazy(() => import("./pages/English/English"));
const FunctionsPage = lazy(() => import("./pages/FunctionsPage/FunctionsPage"));
const Anagram = lazy(() => import("./components/Functions/Anagram"));

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <div className="App-sideMenu bg-light">
          <Header />
        </div>

        <div className="App-mainContent">
          <Suspense fallback={null}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/functions" component={FunctionsPage} />
              <Route path="/functions/anagram" component={Anagram} />
              <Route path="/english" component={English} />
              <Route path="/" component={Main} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
