import React from "react";
import { Route, Link } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

export default () => (
  <div>
    <ul>
      <li><Link to="/">One</Link></li>
      <li><Link to="/two">Two</Link></li>
      <li><Link to="/three">Three</Link></li>
    </ul>

    <hr />

    <Route exact path="/" component={One} />
    <Route path="/two" component={Two} />
    <Route path="/three" component={Three} />
  </div>
);
