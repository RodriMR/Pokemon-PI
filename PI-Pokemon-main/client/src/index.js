import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Fonts/EarlyGameboy/Early-GameBoy.ttf";
import { StoreProvider } from "./context/store";
import { initialState } from "./redux/reducer/index";
import reducer from "./redux/reducer/index";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
