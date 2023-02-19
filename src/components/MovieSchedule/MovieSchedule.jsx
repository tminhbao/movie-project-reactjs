import { Tabs, Typography } from "antd";
import React from "react";
import TheaterDetail from "../TheaterDetail/TheaterDetail";

const MovieSchedule = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <img
          src="https://play-lh.googleusercontent.com/4mLJ2UzPfsq0PChJN0xsG2K3mwU0v-43k16779kv54-QJLww50VvFb3ZMcWryzAlYrE"
          className="w-1/5"
          alt="img-logo-theater"
        ></img>
      ),
      children: <TheaterDetail />,
    },
    {
      key: "2",
      label: (
        <img
          src="https://play-lh.googleusercontent.com/4mLJ2UzPfsq0PChJN0xsG2K3mwU0v-43k16779kv54-QJLww50VvFb3ZMcWryzAlYrE"
          className="w-1/5"
          alt="img-logo-theater"
        ></img>
      ),
      children: <h1>Lotte Cinema</h1>,
    },
    {
      key: "3",
      label: (
        <img
          src="https://play-lh.googleusercontent.com/4mLJ2UzPfsq0PChJN0xsG2K3mwU0v-43k16779kv54-QJLww50VvFb3ZMcWryzAlYrE"
          className="w-1/5"
          alt="img-logo-theater"
        ></img>
      ),
      children: <h1>Lotte Cinema</h1>,
    },
  ];
  return (
    <div className="px-32 text-center my-5">
      <Typography.Text className="font-bold text-3xl">
        Lịch chiếu phim
      </Typography.Text>
      <Tabs
        onChange={onChange}
        type="card"
        items={items}
        className="mx-auto w-5/6"
      />
    </div>
  );
};

export default MovieSchedule;
