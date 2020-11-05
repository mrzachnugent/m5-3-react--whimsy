import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { TweetProvider } from "./components/TweetContext";

ReactDOM.render(
  <TweetProvider>
    <App />
  </TweetProvider>,
  document.getElementById("root")
);
