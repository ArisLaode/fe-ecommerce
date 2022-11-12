import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import {
  HomeOutlined
 } from '@ant-design/icons';

const centerStyle = {
  padding: '0 50px',
  marginBottom: 10,
};


function HeaderApp (){
  return (
    <>
        <Menu mode="horizontal" theme='dark' style={centerStyle}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to='/' style={{paddingRight: '16px'}}>Home</Link>
          </Menu.Item>
        </Menu>
    </>
  );
}

export default HeaderApp;
