import React from "react";
import { Alert, Tabs, Collapse, Row, Col, Tag } from "antd";
const { Panel } = Collapse;

const BookingTicket = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const onCollapseChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "20/02/2023",
      children: (
        <Collapse defaultActiveKey={["1"]} onChange={onCollapseChange}>
          <Panel
            showArrow={false}
            header={
              <Row className="items-center">
                <Col span={1}>
                  <img
                    src="https://play-lh.googleusercontent.com/4mLJ2UzPfsq0PChJN0xsG2K3mwU0v-43k16779kv54-QJLww50VvFb3ZMcWryzAlYrE"
                    alt=""
                    className="w-3/4"
                  />
                </Col>
                <Col span={23} className="pl-2">
                  <p className="-mb-0.5">Lotte Cinema</p>
                  <small>1 rạp</small>
                </Col>
              </Row>
            }
            key="1"
          >
            <Collapse style={{ backgroundColor: "transparent" }}>
              <Panel header="Lotte Cinema Quận 7" showArrow={false}>
                <p>Địa chỉ: ...</p>
                <Tag>11:20</Tag>
                <Tag>11:20</Tag>
                <Tag>11:20</Tag>
                <Tag>11:20</Tag>
                <Tag>11:20</Tag>
              </Panel>
            </Collapse>
          </Panel>
          <Panel showArrow={false} header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel showArrow={false} header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      ),
    },
    { key: "2", label: "21/02/2023", children: <p>Tên rạp 2</p> },
  ];
  return (
    <React.Fragment>
      <p className="mx-auto font-bold text-lg text-center mt-2">
        Mua vé trực tuyến
      </p>
      <Alert
        message="Nhấp vào suất chiếu để tiến hành mua vé"
        type="warning"
        showIcon
        closable
        className="mx-32"
      />
      <Tabs
        onChange={onChange}
        type="card"
        items={items}
        className="px-32 py-6"
      />
    </React.Fragment>
  );
};

export default BookingTicket;
