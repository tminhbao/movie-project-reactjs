import { Button, Card, Tabs, Typography } from "antd";
import React from "react";

const TabEvent = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Tin tức`,
      children: (
        <div className="flex flex-wrap">
          <div className="item-flex-antd p-3 basis-1/4">
            <img
              alt="example"
              src="https://cdn.galaxycine.vn/media/2023/2/6/500_1675669941430.jpg"
              className="h-full"
            />
          </div>
          <div className="item-flex-antd p-3 basis-1/4">
            <img
              alt="example"
              src="https://cdn.galaxycine.vn/media/2023/2/6/500_1675669941430.jpg"
              className="h-full"
            />
          </div>
          <div className="item-flex-antd p-3 basis-1/4">
            <img
              alt="example"
              src="https://cdn.galaxycine.vn/media/2023/2/6/500_1675669941430.jpg"
              className="h-full"
            />
          </div>
          <div className="item-flex-antd p-3 basis-1/4">
            <img
              alt="example"
              src="https://cdn.galaxycine.vn/media/2023/2/6/500_1675669941430.jpg"
              className="h-full"
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `Khuyến mãi`,
      children: (
        <div className="flex flex-wrap">
          <div className="item-flex-antd p-3 basis-1/4">
            <img
              src="https://cdn.galaxycine.vn/media/2023/2/16/glx-q1-1200x1800_1676516168305.jpg"
              alt=""
              srcset=""
              className="h-full"
            />
          </div>
        </div>
      ),
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
      className="px-32 h-full uppercase font-bold bg-white w-full py-6"
    />
  );
};

export default TabEvent;
