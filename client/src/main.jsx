import React from "react";
import ReactDOM from "react-dom/client";
import { Form, BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainID={Sepolia}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
