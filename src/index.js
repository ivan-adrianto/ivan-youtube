import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5ddfaec1cad742aa84ecc59ea2b1dcc5@o511774.ingest.sentry.io/5609502",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

