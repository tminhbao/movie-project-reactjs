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
import Profile from "./pages/Profile/Profile";
import ShowingMovies from "./pages/Movie/ShowingMovies/ShowingMovies";
import UpcomingMovies from "./pages/Movie/UpcomingMovies/UpcomingMovies";
import MovieDetail from "./pages/Movie/MovieDetail/MovieDetail";
import Theater from "./pages/Theater/Theater";
import TheaterDetail from "./pages/Theater/TheaterDetail/TheaterDetail";

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
          <Route path="movie/showing" element={<ShowingMovies />} />
          <Route path="movie/upcoming" element={<UpcomingMovies />} />
          <Route path="movie/moviedetail/:movieId" element={<MovieDetail />} />
          {/* Theater Route   */}
          <Route path="theater" element={<Theater />} />
          <Route path="theater/:theaterId" element={<TheaterDetail />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
