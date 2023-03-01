import { Row, Tabs } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import MovieInfo from "../../../components/Movie/MovieInfo/MovieInfo";

const MovieDetail = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Trailer`,
      children: (
        <iframe
          width="967"
          height="544"
          src="https://www.youtube.com/embed/ZlNFpri-Y40"
          title="Marvel Studios’ Ant-Man and The Wasp: Quantumania | Official Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      key: "2",
      label: <NavLink to="movie/movieschedule/1">Lịch chiếu</NavLink>,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Đánh giá`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Tin tức`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "5",
      label: `Mua vé`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <>
      <MovieInfo />
      <Row className="px-32">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </Row>
    </>
  );
};

export default MovieDetail;
