import { Divider } from "antd";
import { Collapse } from "antd";

import React from "react";
import TheaterCard from "../TheaterCard/TheaterCard";
const { Panel } = Collapse;

const TheaterList = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={onChange}
      className="mx-32 my-8"
    >
      <Panel
        header={
          <div className="flex items-center">
            <div className="mr-2">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
                alt=""
                className="w-8"
              />
            </div>
            <div>
              <span>BHD Star Cineplex</span>
            </div>
          </div>
        }
        key="1"
        showArrow={false}
      >
        <TheaterCard />
        <Divider />
        <TheaterCard />
      </Panel>
      <Panel
        header={
          <div className="flex items-center">
            <div className="mr-2">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
                className="w-8"
              />
            </div>
            <div>
              <span>CGV</span>
            </div>
          </div>
        }
        key="2"
        showArrow={false}
      >
        <TheaterCard />
        <Divider />
        <TheaterCard />
      </Panel>
    </Collapse>
  );
};

export default TheaterList;
