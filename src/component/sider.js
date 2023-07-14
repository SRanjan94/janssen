import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const Sider = ({ collapsed, selectedKey, handleMenuClick }) => {
  return (
    <div>
      <div className="logo"></div>
      {!collapsed && (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          className="menu"
        >
          <Menu.Item key="1" icon={<UserOutlined />} className="square-menu-item">
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} className="square-menu-item">
            <span>Services</span>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />} className="square-menu-item">
            <span>Notifications</span>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />} className="square-menu-item">
            <span>Reports</span>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Sider;
