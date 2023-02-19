import React from "react";
import Banner from "../../components/Banner/Banner";
import MovieSchedule from "../../components/MovieSchedule/MovieSchedule";
import TabEvent from "../../components/TabEvent/TabEvent";
import TabMovie from "../../components/TabMovie/TabMovie";

const Home = () => {
  return (
    <>
      <Banner />
      <TabMovie />
      <TabEvent />
      <MovieSchedule />
    </>
  );
};

export default Home;
