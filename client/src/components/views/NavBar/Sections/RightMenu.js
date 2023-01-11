/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Icon, Badge } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user);
  console.log("props", props);
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login" style={{ color: "black" }}>
            로그인
          </a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register" style={{ color: "black" }}>
            회원가입
          </a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" className="head-example" style={{ marginRight: -22, color: "#667777" }}>
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="upload">
          <a href="/product/upload" style={{ color: "black" }}>
            업로드
          </a>
        </Menu.Item>
        <Menu.Item key="history">
          <a href="/history" style={{ color: "black" }}>
            히스토리
          </a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler} style={{ color: "black" }}>
            로그아웃
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
