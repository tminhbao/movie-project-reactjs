import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/Home";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomeTemplate from "./templates/HomeTemplate";
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
