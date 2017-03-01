import React from "react";
import { StaticRouter, BrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import isBrowser from "is-browser";

const Router = isBrowser ? BrowserRouter : StaticRouter;

export default ({ routerProps }) => (
  <Router {...routerProps}>
    <App />
  </Router>
);
