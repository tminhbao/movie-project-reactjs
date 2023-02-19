import React from "react";
import { Col, Collapse, Image, Row, Tag } from "antd";
import { NavLink } from "react-router-dom";
const { Panel } = Collapse;

const TheaterDetail = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange} className="flex">
      <Panel header="Lotte A" key="1" className="basis-1/3">
        <Row>
          <Col span={10}>
            <Image src="http://movie0706.cybersoft.edu.vn/hinhanh/nha-ba-nu_gp09.jpg" />
          </Col>
          <Col span={14}>
            <Row className="my-2">
              <Col span={12}>
                <span
                  className="bg-primary p-2 rounded-xl uppercase font-bold"
                  style={{
                    color: "#fff",
                  }}
                >
                  C18
                </span>
              </Col>
              <Col span={12}>
                <p className="font-bold">Nhà bà nữ</p>
              </Col>
            </Row>
            <Row className="my-1 mx-auto">
              <Col span={24} className="my-2">
                <Tag color="default">
                  <NavLink to="/">Ngày chiếu - Giờ chiếu</NavLink>
                </Tag>
              </Col>
              <Col span={24} className="my-2">
                <Tag color="default">
                  <NavLink to="/">Ngày chiếu - Giờ chiếu</NavLink>
                </Tag>
              </Col>
              <Col span={24} className="my-2">
                <Tag color="default">
                  <NavLink to="/">Ngày chiếu - Giờ chiếu</NavLink>
                </Tag>
              </Col>
              <Col span={24} className="my-2">
                <Tag color="default">
                  <NavLink to="/">Ngày chiếu - Giờ chiếu</NavLink>
                </Tag>
              </Col>
              <Col span={24} className="my-2">
                <Tag color="default">
                  <NavLink to="/">Ngày chiếu - Giờ chiếu</NavLink>
                </Tag>
              </Col>
              <Col span={24} className="my-2">
                <Tag color="default">
                  <NavLink to="/">Ngày chiếu - Giờ chiếu</NavLink>
                </Tag>
              </Col>
            </Row>
          </Col>
        </Row>
      </Panel>
      <Panel header="Lotte B" key="2" className="basis-1/3">
        Lotte Content
      </Panel>
      <Panel header="Lotte C" key="3" className="basis-1/3">
        Lotte Content
      </Panel>
    </Collapse>
  );
};

export default TheaterDetail;
