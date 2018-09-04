import express from "express";
import cors from "cors";
import { renderToString } from "react-dom/server";
import React from "react";
import serialize from "serialize-javascript";
import { matchPath, StaticRouter } from "react-router-dom";
import routes from "../shared/routes";
import apiEndPoints from "./routes";
import morgan from "morgan";

import App from "../shared/components/App";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(morgan("combined"));
apiEndPoints(app);

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then(data => {
      const context = { data };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Webjet SSR Coding Challenge</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
  
          <body>
            <div id="app">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(err => {
      const data = { error: "invalid url" };
      const context = { data };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Webjet SSR Coding Challenge</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
  
          <body>
            <div id="app">${markup}</div>
          </body>
        </html>
      `);
    });
});
app.listen(3000, () => {
  console.log("server is listening on port: 3000");
});
