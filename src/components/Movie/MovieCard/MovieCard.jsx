import React from "react";
import { Button, Card, Col, Popover, Row, Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";
const { Meta } = Card;

const MovieCard = () => {
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
  const renderLikePercentage = () => {
    return Math.floor(Math.random() * (99 - 60 + 1) + 60);
  };

  return (
    <Card
      style={{
        color: "#fff",
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
      ]}
      className="cursor-pointer w-52"
    >
      <Meta
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
        description={
          <Row>
            <Col span={16}>17/02</Col>
            <Col span={8} className="flex">
              <span className="mr-1">
                <LikeOutlined />
              </span>
              <span>{renderLikePercentage()} %</span>
            </Col>
          </Row>
        }
        className="flex items-center overflow-hidden"
      />
    </Card>
  );
};

export default MovieCard;
