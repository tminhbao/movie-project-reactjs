import React, { useState } from "react";
import { Menu } from "antd";
import "../../assets/sass/index.scss";

const Navbar = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="mx-auto w-full text-white uppercase font-bold px-8"
      style={{
        backgroundColor: "#000",
      }}
    >
      <Menu.Item className="navbar-item-antd" style={{ margin: "0 30px" }}>
        Mua Vé
      </Menu.Item>
      <Menu.SubMenu
        title="Sự kiện"
        className="navbar-item-antd"
        style={{ margin: "0 30px" }}
      >
        <Menu.Item>Phim đang chiếu</Menu.Item>
        <Menu.Item>Phim sắp chiếu</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item className="navbar-item-antd" style={{ margin: "0 30px" }}>
        Góc điện ảnh
      </Menu.Item>
      <Menu.SubMenu
        title="Sự kiện"
        className="navbar-item-antd"
        style={{ margin: "0 30px" }}
      >
        <Menu.Item>Ưu đãi</Menu.Item>
        <Menu.Item>Phim hay tháng</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item className="navbar-item-antd" style={{ margin: "0 30px" }}>
        Rạp/Giá Vé
      </Menu.Item>
      <Menu.Item className="navbar-item-antd" style={{ margin: "0 30px" }}>
        Hỗ trợ
      </Menu.Item>
      <Menu.Item className="navbar-item-antd" style={{ margin: "0 30px" }}>
        Thành viên
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
