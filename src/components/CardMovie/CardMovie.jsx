import React from "react";
import { Avatar, Button, Card, Popover, Typography } from "antd";
const { Meta } = Card;

const CardMovie = () => {
  const content = (
    <Typography.Text
      className="truncate max-w"
      style={{
        width: "10px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      NGƯỜI KIẾN VÀ CHIẾN BINH ONG: THẾ GIỚI LƯỢNG TỬ
    </Typography.Text>
  );
  return (
    <Card
      style={{
        color: "#fff",
        maxWidth: "280px",
      }}
      cover={
        <img
          alt="example"
          src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202302/10773_103_100004.jpg"
        />
      }
      actions={[
        <Button
          className="bg-primary w-3/4 mx-2 py-1"
          style={{ color: "#fff" }}
        >
          Đặt vé
        </Button>,
        <Button
          className="bg-primary w-3/4 mx-2 py-1"
          style={{ color: "#fff" }}
        >
          Xem chi tiết
        </Button>,
      ]}
      className="cursor-pointer"
    >
      <Meta
        avatar={
          <Avatar
            style={{ backgroundColor: "#fb4226", color: "white" }}
            className="px-2"
          >
            C18
          </Avatar>
        }
        title={
          <Popover content={content}>
            <Typography.Text
              className="truncate max-w cursor-pointer"
              style={{
                width: "10px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              NGƯỜI KIẾN VÀ CHIẾN BINH ONG: THẾ GIỚI LƯỢNG TỬ
            </Typography.Text>
          </Popover>
        }
        //description="This is the description"
        className="flex items-center overflow-hidden"
      />
    </Card>
  );
};

export default CardMovie;
