import { Divider } from "antd";
import { Collapse } from "antd";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheatersApi } from "../../../redux/reducers/theaterReducer";
import TheaterCard from "../TheaterCard/TheaterCard";
const { Panel } = Collapse;

const TheaterList = () => {
  const { theaterList } = useSelector((state) => state.theaterReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTheatersApi());
  }, [dispatch]);

  const onChange = (key) => {
    console.log(key);
  };

  const renderPanelTheater = (theaterList) => {
    return theaterList?.map((item, index) => (
      <Panel
        header={
          <div className="flex items-center">
            <div className="mr-2">
              <img src={item.logo} alt="" className="w-8" />
            </div>
            <div>
              <span>{item.tenHeThongRap}</span>
            </div>
          </div>
        }
        key={index}
        showArrow={false}
      >
        <TheaterCard />
        <Divider />
        <TheaterCard />
      </Panel>
    ));
  };
  return (
    <Collapse defaultActiveKey="0" onChange={onChange} className="mx-32 my-8">
      {renderPanelTheater(theaterList)}
    </Collapse>
  );
};

export default TheaterList;
