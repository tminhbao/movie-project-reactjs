import React from "react";

const TabEvent = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Phim đang chiếu`,
      children: (
        <div className="flex flex-wrap">
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <div className="item-flex-antd m-3">
            <CardMovie />
          </div>
          <Button
            className="mx-auto cursor-pointer text-white font-bold rounded-full hover:opacity-70 uppercase mt-2"
            style={{
              border: "1px solid #3b82f6",
              backgroundColor: "#3b82f6",
              color: "#fff",
              fontSize: "20px",
              padding: "20px 30px",
              lineHeight: "1px",
            }}
          >
            Load More
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      label: `Phim sắp chiếu`,
      children: <CardMovie />,
    },
  ];
  return <div>TabEvent</div>;
};

export default TabEvent;
