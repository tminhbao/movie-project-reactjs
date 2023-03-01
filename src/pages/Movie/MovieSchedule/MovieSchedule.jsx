import { Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../../../components/Movie/MovieList/MovieList";
import TheaterList from "../../../components/Theater/TheaterList/TheaterList";

const MovieSchedule = () => {
  const params = useParams();
  const movieId = params.movieId;
  if (movieId) {
    return (
      <>
        <p>Nothing</p>
      </>
    );
  } else {
    return (
      <div className="px-32">
        <TheaterList />
        <MovieList />
      </div>
    );
  }
};

export default MovieSchedule;
