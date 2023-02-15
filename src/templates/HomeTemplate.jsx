import { Layout, Menu } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
  return (
    <>
      <Layout className="layout">
        <Header
          className="w-full mx-auto flex items-center"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="logo-img bg-white">
            <img
              src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
              alt="logo-img"
              className="w-56"
            />
          </div>
        </Header>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default HomeTemplate;
