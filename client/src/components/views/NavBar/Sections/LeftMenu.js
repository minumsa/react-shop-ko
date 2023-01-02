import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/" style={{ color: "black" }}>
          홈
        </a>
      </Menu.Item>
      <SubMenu title={<span>카테고리</span>}>
        <Menu.Item key="setting:1">
          <a href="/outer" style={{ color: "black" }}>
            OUTER
          </a>
        </Menu.Item>
        <Menu.Item key="setting:2">
          {" "}
          <a href="/top" style={{ color: "black" }}>
            TOP
          </a>
        </Menu.Item>
        <Menu.Item key="setting:3">
          {" "}
          <a href="/bottom" style={{ color: "black" }}>
            BOTTOM
          </a>
        </Menu.Item>
        <Menu.Item key="setting:4">
          {" "}
          <a href="/shoes" style={{ color: "black" }}>
            SHOES
          </a>
        </Menu.Item>
        <Menu.Item key="setting:5">
          {" "}
          <a href="/bag" style={{ color: "black" }}>
            BAG
          </a>
        </Menu.Item>
        <Menu.Item key="setting:6">
          {" "}
          <a href="/accessory" style={{ color: "black" }}>
            ACCESSORY
          </a>
        </Menu.Item>
        <Menu.Item key="setting:7">
          {" "}
          <a href="/lifestyle" style={{ color: "black" }}>
            LIFESTYLE
          </a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
