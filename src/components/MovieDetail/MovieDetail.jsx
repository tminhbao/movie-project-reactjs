import { Button, Col, Image, Row } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import React from "react";

const MovieDetail = () => {
  return (
    <Row className="px-52 py-16">
      <Col span={6}>
        <Image
          src="http://movie0706.cybersoft.edu.vn/hinhanh/nha-ba-nu_gp09.jpg"
          width={200}
          className="mx-auto"
        />
      </Col>
      <Col span={18}>
        <Row>
          <Col span={24}>
            <span
              className="bg-primary p-2 rounded-xl uppercase font-bold"
              style={{
                color: "#fff",
              }}
            >
              C18
            </span>
          </Col>
        </Row>
        <Row className="my-3">
          <Col span={24}>
            <p className="font-bold text-3xl">Nhà bà nữ</p>
            <span className="mr-3">Nhà bà nữ</span>
            <span className="mr-3">2023</span>
            <span className="mr-3">120 phút</span>
            <p className="text-2xl font-bold mt-3">Nội dung</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              delectus possimus repellendus aut sit, praesentium temporibus?
              Perferendis harum labore, recusandae sed placeat architecto
              repellendus? Cum quidem atque quaerat nostrum impedit.
            </p>
            <Row>
              <Col span={8}>
                <p className="text-lg font-bold mt-3">Nội dung</p>
                <p>01/01/2023</p>
              </Col>
              <Col span={8}>
                <p className="text-lg font-bold mt-3">Thể loại</p>
                <p>Hài</p>
              </Col>
              <Col span={8}>
                <p className="text-lg font-bold mt-3">Quốc gia</p>
                <p>Việt Nam</p>
              </Col>
            </Row>
            <Row className="flex items-center">
              <div className="basis-1/12">
                <LikeOutlined
                  className="text-4xl mr-2"
                  style={{ color: "#0c4da2" }}
                />
              </div>
              <div className="basis-11/12">
                <Button
                  className="bg-primary mt-5"
                  size="large"
                  style={{ color: "#fff" }}
                >
                  Mua Vé
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MovieDetail;
