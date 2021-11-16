import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { Layout, Menu, Button, Select} from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const right1 = { position: 'absolute', top: 0, right: 0 };

export default function NavBarUser(){

    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item >Logo</Menu.Item>
        <SubMenu title = "About">
          <Menu.Item>About Us</Menu.Item>
          <Menu.Item>In the News</Menu.Item>
          <Menu.Item>Testimonials</Menu.Item>
        </SubMenu>
        <Menu.Item> <NavLink to = '/cases'>Cases</NavLink></Menu.Item>
        <SubMenu title = "Help">
          <Menu.Item>How to Use</Menu.Item>
          <Menu.Item>Fundamentals</Menu.Item>
        </SubMenu>
        <Menu.Item style={right1}><Button type="primary">User</Button></Menu.Item>     
      </Menu>
    </Header>
    )
}