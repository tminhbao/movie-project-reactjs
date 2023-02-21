import { Layout, Input, Button, Dropdown, Typography } from "antd";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/sass/index.scss";
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
  const onSearch = (value) => console.log(value);
  const items = [
    {
      key: "1",
      label: <NavLink to="movie/showing">Phim đang chiếu</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to="movie/upcoming">Phim sắp chiếu</NavLink>,
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
          <div className="logo-img">
            <NavLink to="/">
              <img
                src="https://moveek.com/bundles/ornweb/img/logo.png"
                alt=""
                className="w-1/3 cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="navigation">
            <NavLink to="/schedule" className="mx-3">
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
            <NavLink to="/theater" className="mx-3">
              Rạp
            </NavLink>
          </div>

          <div className="search-wrapper h-full relative w-1/4 ">
            <Input.Search
              placeholder="Tìm tên phim, diễn viên..."
              allowClear
              onSearch={onSearch}
              className="absolute top-1/2 -translate-y-1/2 w-full"
              size="large"
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
