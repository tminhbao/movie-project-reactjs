import { Button, Typography } from "antd";
import React from "react";
import MovieCard from "../../components/Movie/MovieCard/MovieCard";

const Home = () => {
  return (
    <React.Fragment>
      <Typography.Title className="text-center block my-4">
        Mua vé theo phim
      </Typography.Title>

      <div className="movie-banner flex flex-wrap px-32">
        <div className="basis-1/5 p-2">
          <MovieCard />
        </div>
        <div className="basis-1/5 p-2">
          <MovieCard />
        </div>
        <div className="basis-1/5 p-2">
          <MovieCard />
        </div>
        <div className="basis-1/5 p-2">
          <MovieCard />
        </div>
        <div className="basis-1/5 p-2">
          <MovieCard />
        </div>
        <Button className="mx-auto text-primary px-9 border-primary my-6 uppercase font-bold">
          Load more
        </Button>
      </div>

      <Typography.Title className="text-center block my-4">
        Mua vé theo rạp
      </Typography.Title>
    </React.Fragment>
  );
};

export default Home;
