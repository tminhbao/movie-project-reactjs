import { Col, Row, Tag } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const MovieItem = () => {
  return (
    <Row
      style={{
        backgroundColor: "#fff",
      }}
      className="flex items-center py-1 rounded-xl"
      gutter={(4, 4)}
    >
      <Col span={2}>
        <img
          src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202302/10773_103_100004.jpg"
          alt=""
          srcset=""
          className="p-2 rounded-xl"
        />
      </Col>
      <Col span={22}>
        <p>Người Kiến Và Chiến Binh Ong: Thế Giới Lượng TỬ</p>
        <p>2D Phụ đề Việt</p>
        <NavLink>
          <Tag color="default" className="p-2 text-base">
            09:05
          </Tag>
        </NavLink>
        <NavLink>
          <Tag color="default" className="p-2 text-base">
            09:05
          </Tag>
        </NavLink>
        <NavLink>
          <Tag color="default" className="p-2 text-base">
            09:05
          </Tag>
        </NavLink>
        <NavLink>
          <Tag color="default" className="p-2 text-base">
            09:05
          </Tag>
        </NavLink>
      </Col>
    </Row>
  );
};

export default MovieItem;
