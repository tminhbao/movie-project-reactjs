import { Button, Col, Row, Typography } from "antd";
import React from "react";
import MovieCard from "../../components/Movie/MovieCard/MovieCard";

const Home = () => {
  return (
    <React.Fragment>
      <Typography.Title className="text-center block my-4">
        Mua vé theo phim
      </Typography.Title>

      <Row className="px-6" gutter={(10, 10)}>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Col span={3}>
          <MovieCard />
        </Col>
        <Button className="mx-auto text-primary px-9 border-primary my-6 uppercase font-bold">
          Load more
        </Button>
      </Row>

      <Typography.Title className="text-center block my-4">
        Mua vé theo rạp
      </Typography.Title>
    </React.Fragment>
  );
};

export default Home;
