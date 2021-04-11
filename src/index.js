import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import GoBack from "./components/GoBack";

import { NoMatch } from "./components/NoMatch";
import { LinkList } from "./components/Linklist";
import { LinkDetail } from "./components/LinkDetail";
import "./index.css";
import "./App.css"

import App from './App'

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      This is a home page, there are many like it but this one is mine, without
      this homepage, the application has less structure, with it, the
      application can easily move between pages.
    </p>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
        <li>
          <Link to="/reallyInvalidUrl">Invalid Page</Link>
        </li>
        <li>
          <GoBack />
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/links" component={LinkList} />
        <Route path="/links/:id" component={LinkDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

