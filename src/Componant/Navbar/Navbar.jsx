import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainWrapper, NavbarHeader, NavbarMenu } from "./style";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
const item = [
  { label: "Task List", to: "/", key: "/" },
  {
    label: "User",
    to: "/user",
    key: "/user",
    children: [
      {
        label: "Login",
        key: "/login",
      },
      {
        label: "Register",
        key: "/register",
      },
    ],
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (value) => {
    // console.log({ key });
    navigate(value?.key);
  };
  return (
    <Layout>
      <NavbarHeader>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/login"]}
          onClick={handleNavigate}
          items={item}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </NavbarHeader>
    </Layout>
  );
};

export default Navbar;
