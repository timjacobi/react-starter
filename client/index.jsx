import { createElement } from "react";
import { render } from "react-dom";
import Root from "./components/Root";

render(createElement(Root), document.querySelector("#app"));
