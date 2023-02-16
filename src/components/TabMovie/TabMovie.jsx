import { Tabs } from "antd";
import React from "react";
import CardMovie from "../CardMovie/CardMovie";

const TabMovie = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Phim đang chiếu`,
      children: (
        <div
          className="flex items-center overflow-hidden h-60"
          style={{ border: "1px solid red" }}
        >
          <div className="item-flex-antd mx-3 basis-1/4">
            <CardMovie />
          </div>
          <div className="item-flex-antd mx-3 basis-1/4">
            <CardMovie />
          </div>
          <div className="item-flex-antd mx-3 basis-1/4">
            <CardMovie />
          </div>
          <div className="item-flex-antd mx-3 basis-1/4">
            <CardMovie />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `Phim sắp chiếu`,
      children: <CardMovie />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      style={{
        color: "#474a4f",
      }}
      tabBarStyle={{
        color: "#474a4f",
      }}
      className="px-32 h-full uppercase font-bold bg-white w-full"
    />
  );
};

export default TabMovie;
