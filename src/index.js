import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Profile from "./pages/Profile/Profile";

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
          <Route path="profile" element={<Profile />} />
          {/* Movie Route  */}
          <Route path="movie/moviedetail/:movieId" element={<MovieDetail />} />
          {/* <Route path="movie/purchase/:movieId" element={<Purchase />} /> */}
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
