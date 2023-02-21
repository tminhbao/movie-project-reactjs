import { Col, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const TheaterCard = () => {
  return (
    <NavLink to="/">
      <Row className="cursor-pointer">
        <Col span={1}>
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
            className="w-3/4"
            alt=""
          />
        </Col>
        <Col span={23}>
          <p>BHD Star Cineplex - 3/2</p>
          <span style={{ color: "#bcbcbc" }}>
            L5-Vincom 3/2, 3C Đường 3/2, Q.10
          </span>
        </Col>
      </Row>
    </NavLink>
  );
};

export default TheaterCard;
