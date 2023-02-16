import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import "../../assets/sass/Login/Login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
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
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
            className="w-1/2"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Typography.Text className="login-form-forgot w-1/2" href="">
            Forgot password
          </Typography.Text>
        </Form.Item>
        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-primary block w-full"
          >
            Log in
          </Button>
          <Typography.Text href="" className="mt-2 block">
            Don't have an account?{" "}
            <NavLink to="/register">Register now!</NavLink>
          </Typography.Text>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
