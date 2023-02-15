import { Tabs } from "antd";
import React from "react";

const TabMovie = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Phim đang chiếu`,
      children: <p>Movie Card</p>,
    },
    {
      key: "2",
      label: `Phim sắp chiếu`,
      children: <p>Movie Card</p>,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      style={{
        color: "#fff",
        backgroundColor: "#242729",
      }}
      tabBarStyle={{
        color: "#fff",
      }}
      className="px-5 h-full uppercase font-bold"
    />
  );
};

export default TabMovie;
