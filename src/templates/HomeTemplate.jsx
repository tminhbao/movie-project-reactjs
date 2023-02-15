import { Layout, Input, Button } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../assets/sass/index.scss";
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
  const onSearch = (value) => console.log(value);
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
          <div className="logo-img bg-white">
            <img
              src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
              alt="logo-img"
              className="w-56"
            />
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
            <Button className="mx-1 btn-login">Đăng ký</Button>
            <Button className="mx-1 btn-register">Đăng nhập</Button>
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
