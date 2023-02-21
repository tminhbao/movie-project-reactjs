import { Col, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const TheaterDetail = () => {
  return (
    <React.Fragment>
      <Row
        className="info-theater px-32 mt-6 flex items-center"
        gutter={(1, 1)}
      >
        <Col span={2}>
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
            alt=""
            srcset=""
            className="w-3/4"
          />
        </Col>
        <Col span={22}>
          <p>BHD Star Cineplex - 3/2</p>
          <span style={{ color: "#bcbcbc" }}>
            L5-Vincom 3/2, 3C Đường 3/2, Q.10
          </span>
          <Row
            className="flex items-center"
            style={{
              color: "#bcbcbc",
            }}
          >
            <NavLink className="mr-3">
              <i class="fa-solid fa-money-bill mr-1"></i>
              <span>Giá Vé</span>
            </NavLink>
            <NavLink className="mr-3">
              <i class="fa-solid fa-bars mr-1"></i>
              <span>BHD Star Cineplex</span>
            </NavLink>
          </Row>
          <p className="desc-theater">
            Lịch chiếu phim & Mua vé BHD Star 3/2 - rạp BHD toàn quốc đầy đủ &
            tiện lợi nhất. Rạp BHD 3/2 nằm ở TTTM Vincom 3/2, với 5 phòng chiếu
            phim 2D và 3D, là rạp chiếu phim thứ 3 thuộc BHD Star tại Sài Gòn.
            Nhắm đến đối tượng khán giả trẻ trên trục đường rất nhộn nhịp, BHD
            Star 3/2 luôn có giá vé rất cạnh tranh.
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TheaterDetail;
