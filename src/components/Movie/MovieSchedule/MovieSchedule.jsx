import { Tabs } from "antd";
import React from "react";
import MovieList from "../MovieList/MovieList";

const MovieSchedule = () => {
  const items = [
    {
      key: 1,
      label: (
        <div className="text-center opacity-80 px-4 py-2">
          <p>21/2</p>
          <p>Thứ 3</p>
        </div>
      ),
      children: <MovieList />,
    },
    {
      key: 2,
      label: (
        <div className="text-center opacity-80 px-4 py-2">
          <p>22/2</p>
          <p>Thứ 4</p>
        </div>
      ),
      children: <MovieList />,
    },
    {
      key: 3,
      label: (
        <div className="text-center opacity-80 px-4 py-2">
          <p>23/2</p>
          <p>Thứ 5</p>
        </div>
      ),
      children: <MovieList />,
    },
  ];
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="large"
        items={items}
        className="px-32"
      />
    </>
  );
};

export default MovieSchedule;
