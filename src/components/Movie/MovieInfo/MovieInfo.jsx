import React from "react";
import { Button, Col, Row, message } from "antd";
const MovieInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleDisplayMessage = () => {
    messageApi.error("Xin lỗi, mình chưa có làm tính năng này!!!");
  };
  return (
    <React.Fragment>
      {contextHolder}
      <Row
        className="px-32 py-4"
        style={{
          backgroundColor: "#12263f",
        }}
        gutter={(10, 10)}
      >
        <Col span={4}>
          <img
            src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202302/10773_103_100004.jpg"
            alt=""
            srcset=""
          />
        </Col>
        <Col span={20}>
          <p style={{ color: "#fff" }} className="font-bold text-3xl">
            Người Kiến Và Chiến Binh Ong: Thế Giới Lượng Tử
          </p>
          <Button
            className="mt-4 mr-2"
            type="primary"
            onClick={handleDisplayMessage}
          >
            <i className="fa-solid fa-heart mr-2"></i>
            Thích
          </Button>
          <Button
            className="mt-4 mr-2"
            type="primary"
            onClick={handleDisplayMessage}
          >
            <i class="fa-solid fa-star mr-2"></i>
            Đánh giá
          </Button>
          <Button className="mt-4 mr-2 bg-primary" type="primary">
            Mua Vé
          </Button>
          <Row>
            <Col span={24} style={{ color: "#fff" }}>
              <p className="mt-2 text-md text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt beatae sequi at dolorum, blanditiis voluptatum! Commodi
                veritatis exercitationem repellendus ab cupiditate nemo corporis
                deleniti at esse, animi sed nulla praesentium dolore alias natus
                iure. Odio, enim. Molestiae voluptates rem similique totam
                aperiam, nisi beatae impedit quasi maiores, nostrum quisquam
                sit, nobis nihil a temporibus enim quaerat architecto aut
                delectus? Labore itaque debitis vero assumenda esse, qui aperiam
                eaque unde et.
              </p>
            </Col>
          </Row>
          <Row className="mt-6 font-bold" style={{ color: "#fff" }}>
            <Col span={6}>
              <i class="fa-solid fa-thumbs-up mr-2"></i>
              <span>Hài lòng</span>
              <p>87%</p>
            </Col>
            <Col span={6}>
              <i class="fa-solid fa-calendar mr-2"></i>
              <span>Khởi chiếu</span>
              <p>17/02/2023</p>
            </Col>
            <Col span={6}>
              <i class="fa-solid fa-clock mr-2"></i>
              <span>Thời lượng</span>
              <p>124 phút</p>
            </Col>
            <Col span={6}>
              <i class="fa-solid fa-user-check mr-2"></i>
              <span>Giới hạn tuổi</span>
              <p>NC13</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MovieInfo;
