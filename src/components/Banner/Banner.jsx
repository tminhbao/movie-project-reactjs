import React from "react";
import { Carousel, Form, Select, Tabs, Typography } from "antd";
import "../../assets/sass/Banner/Banner.scss";
import "../../assets/sass/index.scss";
const { Option } = Select;
const Banner = () => {
  // Handle user select booking movie categories tab
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Theo phim`,
      children: (
        <Form>
          <Form.Item name="select">
            <Select placeholder="Chọn phim">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn rạp">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn ngày">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn suất">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "2",
      label: `Theo ngày`,
      children: (
        <Form>
          <Form.Item name="select">
            <Select placeholder="Chọn ngày">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn rạp">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select
              placeholder="Chọn phim"
              bordered="false"
              style={{ borderRadius: "0px" }}
            >
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn suất">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "3",
      label: `Theo rạp`,
      children: (
        <Form>
          <Form.Item name="select">
            <Select placeholder="Chọn rạp">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select
              placeholder="Chọn phim"
              bordered="false"
              style={{ borderRadius: "0px" }}
            >
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn ngày">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item name="select">
            <Select placeholder="Chọn suất">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-1 overflow-hidden">
        <div className="item-flex lg:col-span-6 md:col-span-6 sm:col-span-1">
          <Carousel autoplay className="h-100 w-100" dots>
            <div className="bg-red-500">
              <img
                src="https://cdn.galaxycine.vn/media/2023/2/7/2048x682-_1675763694420.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://cdn.galaxycine.vn/media/2023/2/6/2048x682-100_1675673774560.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://cdn.galaxycine.vn/media/2023/2/8/titanic-5_1675823758136.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://cdn.galaxycine.vn/media/2023/2/8/sword-art-online-progressive-scherzo-of-the-deep-2_1675825448962.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://cdn.galaxycine.vn/media/2023/2/9/2048x682_1675912303888.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://cdn.galaxycine.vn/media/2023/2/8/2048x682_1675824852224.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://cdn.galaxycine.vn/media/2023/1/17/bangqltv-2023-digital-2048x682_1673944592941.jpg"
                alt=""
                srcset=""
              />
            </div>
          </Carousel>
        </div>
        <div className="item-flex lg:col-span-2 md:col-span-6 sm:col-span-1">
          <div className="form-booking-ticket mx-auto h-full">
            <div
              className="px-4 py-2 text-center w-100"
              style={{ backgroundColor: "#f47f1f" }}
            >
              <Typography.Text className="text-white uppercase font-bold text-xl">
                Mua Vé Nhanh
              </Typography.Text>
            </div>
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{
                color: "#fff",
                backgroundColor: "#242729",
              }}
              tabBarStyle={{
                color: "#fff",
              }}
              className="px-5 h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
