import { Card } from "antd";
import React from "react";

const CardMovie = () => {
  return (
    <Card
      hoverable
      //   cover={
      //     <img
      //       alt="example"
      //       src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      //       className="w-1 object-contain"
      //     />
      //   }
      className="w-full h-5/6 overflow-hidden"
      style={{ border: "1px solid blue" }}
    >
      <img
        src="https://cdn.galaxycine.vn/media/2023/2/7/1350x900-_1675764335601.jpg"
        className="h-20"
      />
      {/* <Card.Meta title="Nhà bà nữ" description="www.instagram.com" /> */}
      <Card.Meta title="Nhà bà nữ" />
    </Card>
  );
};

export default CardMovie;
