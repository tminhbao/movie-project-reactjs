import { Button, Form, Input } from "antd";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Form
        layout="vertical"
        className="flex flex-wrap p-4 w-1/2 mx-auto my-6"
        size="large"
      >
        <Form.Item label="Tên tài khoản" className="w-3/4 basis-1/2 px-6 py-2">
          <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu" className="w-3/4 basis-1/2 px-6 py-2">
          <Input />
        </Form.Item>
        <Form.Item label="Số điện thoại" className="w-3/4 basis-1/2 px-6 py-2">
          <Input />
        </Form.Item>
        <Form.Item label="Email" className="w-3/4 basis-1/2 px-6 py-2">
          <Input />
        </Form.Item>
        <Button className="px-6 py-2 rounded-2xl">Cập nhật</Button>
      </Form>
    </div>
  );
};

export default Profile;
