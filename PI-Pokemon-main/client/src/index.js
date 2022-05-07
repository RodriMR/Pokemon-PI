import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./store/index";
import "./Fonts/EarlyGameboy/Early-GameBoy.ttf";
import { StoreProvider } from "./context/store";
import { initialState, reducer } from "./redux/reducer/index";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <StoreProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StoreProvider>
//   </React.StrictMode>,

//   document.getElementById("root")
// );
