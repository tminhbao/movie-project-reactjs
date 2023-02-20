import { Layout, Input, Button, Dropdown, Space, Typography } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../assets/sass/index.scss";
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
  const onSearch = (value) => console.log(value);
  const items = [
    {
      key: "1",
      label: <NavLink to="/dangchieu">Phim đang chiếu</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to="/sapchieu">Phim sắp chiếu</NavLink>,
    },
  ];
  return (
    <>
      <Layout className="layout">
        <Header
          className="w-full items-center"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="navigation">
            <NavLink to="/" className="mx-3">
              Lịch chiếu
            </NavLink>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              className="cursor-pointer mx-3"
            >
              <Typography.Text>Phim</Typography.Text>
            </Dropdown>
            <Typography.Text className="mx-3">Rạp</Typography.Text>
          </div>

          <div className="search-wrapper h-full relative w-1/4">
            <Input.Search
              placeholder="Tìm tên phim, diễn viên..."
              allowClear
              onSearch={onSearch}
              className="absolute top-1/2 -translate-y-1/2 w-full"
            />
          </div>
          <div className="user-wrapper">
            <Button className="mx-1 btn-login">
              <NavLink to="/register">Đăng ký</NavLink>
            </Button>
            <Button className="mx-1 btn-register">
              <NavLink to="/login">Đăng nhập</NavLink>
            </Button>
          </div>
        </Header>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Movie Booking Website ©2023 Created by{" "}
          <a href="https://github.com/tminhbao">@trminhbao</a>
        </Footer>
      </Layout>
    </>
  );
};

export default HomeTemplate;
