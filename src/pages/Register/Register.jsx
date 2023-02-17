import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg)",
      }}
      className="h-screen"
    >
      <Form
        name="normal_login"
        className="login-form bg-white w-1/4 mx-auto p-8 rounded-md relative top-1/2 -translate-y-2/4"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item name="username">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên đăng nhập"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item name="passwordConfirm">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>
        <Form.Item name="name">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Họ Tên"
          />
        </Form.Item>
        <Form.Item name="email">
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="phoneNumber">
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Số điện thoại"
          />
        </Form.Item>
        <Form.Item name="accountType" className="w-full">
          <Select
            defaultValue="Người dùng"
            options={[
              {
                value: "Người dùng",
                label: "Người dùng",
              },
              {
                value: "Quản trị viên",
                label: "Quản trị viên",
              },
            ]}
            placeholder="Chọn loại tài khoản"
            className="w-full"
          />
        </Form.Item>
        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-primary block w-full"
          >
            Đăng ký
          </Button>
          <Typography.Text href="" className="mt-2 block">
            Đã có tài khoản?{" "}
            <NavLink to="/login">Đăng nhập ngay nào!!!</NavLink>
          </Typography.Text>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
