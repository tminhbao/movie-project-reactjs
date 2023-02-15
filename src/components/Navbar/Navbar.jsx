import React, { useState } from "react";
import { Menu } from "antd";
import "../../assets/sass/index.scss";
import { CaretDownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const items = [
    {
      label: "Mua Vé",
      key: "Mua Vé",
      icon: <CaretDownOutlined />,
    },
    {
      label: "Phim",
      key: "Phim",
      children: [
        {
          type: "group",
          children: [
            {
              label: "Phim Đang Chiếu",
              key: "setting:1",
            },
            {
              label: "Phim Sắp Chiếu",
              key: "setting:2",
            },
          ],
        },
      ],
    },
    {
      label: "Góc điện ảnh",
      key: "Góc điện ảnh",
      icon: <CaretDownOutlined />,
    },
    {
      label: "Sự kiện",
      key: "Sự kiện",
      icon: <CaretDownOutlined />,
    },
    {
      label: "Rạp/Giá vé",
      key: "Rạp/Giá vé",
    },
    {
      label: "Hỗ trợ",
      key: "Hỗ trợ",
    },
    {
      label: "Thành viên",
      key: "Thành viên",
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="mx-auto w-full text-white uppercase font-bold px-8"
      style={{
        backgroundColor: "#000",
      }}
    />
  );
};

export default Navbar;
