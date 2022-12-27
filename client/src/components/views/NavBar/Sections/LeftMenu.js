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
        <Menu.Item key="setting:1">OUTER</Menu.Item>
        <Menu.Item key="setting:2">TOP</Menu.Item>
        <Menu.Item key="setting:3">BOTTOM</Menu.Item>
        <Menu.Item key="setting:4">SHOES</Menu.Item>
        <Menu.Item key="setting:5">BAG</Menu.Item>
        <Menu.Item key="setting:6">ACCESSORY</Menu.Item>
        <Menu.Item key="setting:7">LIFESTYLE</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
