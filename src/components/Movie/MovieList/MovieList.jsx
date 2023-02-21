import { Col, Row } from "antd";
import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = () => {
  return (
    <Row>
      <Col span={24} className="my-3">
        <MovieItem />
      </Col>
      <Col span={24} className="my-3">
        <MovieItem />
      </Col>
      <Col span={24} className="my-3">
        <MovieItem />
      </Col>
    </Row>
  );
};

export default MovieList;
