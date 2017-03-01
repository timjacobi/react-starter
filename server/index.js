const express = require("express");
const React = require("react");
const path = require("path");
const render = require("./render");

module.exports = ({ NODE_ENV = "development" }) => {
  const app = express();

  if (NODE_ENV === "development") {
    const compiler = require("webpack")(require("../webpack.dev.config"));

    app.use(require("webpack-dev-middleware")(compiler, { hot: true }));
    app.use(require("webpack-hot-middleware")(compiler));

    require("babel-register");
  }

  app.use(express.static(path.resolve(`${__dirname}/../public`)));

  app.get("*", (req, res) => {
    const App = require("../client/components/App.jsx").default;
    const { StaticRouter } = require("react-router");

    const context = React.createElement(
      StaticRouter,
      { location: req.url },
      React.createElement(App)
    );

    return res.status(200).send(render(context));
  });

  return app;
};
