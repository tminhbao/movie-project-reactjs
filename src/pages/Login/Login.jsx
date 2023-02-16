import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import "../../assets/sass/Login/Login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const handleForgotPassword = () => {
    messageApi.open({
      type: "error",
      content: "Xin lỗi, mình chưa có làm tính năng này",
    });
  };
  return (
    <>
      {contextHolder}
      <div
        style={{
          backgroundImage:
            "url(https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg)",
        }}
        className="h-screen"
      >
        <Form
          name="normal_login"
          className="login-form bg-white w-1/4 mx-auto p-8 rounded-md relative top-1/2 -translate-y-3/4"
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
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              className="w-1/2"
            >
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <Typography.Text
              className="login-form-forgot w-1/2 text-opacity-10 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Quên mật khẩu
            </Typography.Text>
          </Form.Item>
          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button bg-primary block w-full"
            >
              Đăng nhập
            </Button>
            <Typography.Text href="" className="mt-2 block">
              Chưa có tài khoản hả?{" "}
              <NavLink to="/register">Dô đây đăng ký đi nè!</NavLink>
            </Typography.Text>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
