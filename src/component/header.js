import React from 'react';
import { Button, Input, Avatar } from 'antd';
import { SearchOutlined, BellTwoTone, UserOutlined } from '@ant-design/icons';

const Header = ({ collapsed, setCollapsed, notificationVisible, handleBellIconClick, handleProfileClick }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="heading">Jenssen</h1>
        <div className="search-bar">
          {/* <Input placeholder="Search" suffix={<Button shape="square" icon={<SearchOutlined />} />} /> */}
          Service Risk Report
        </div>
        <div className="bell-icon" onClick={handleBellIconClick}>
          <BellTwoTone style={{ fontSize: '24px' }} />
          {notificationVisible && (
            <div className="notification-message">
              You have a new notification
            </div>
          )}
        </div>
        <div className="profile-icon" onClick={handleProfileClick}>
          <div className="avatar-wrapper">
            <Avatar size="large" icon={<UserOutlined />} className="icon" />
          </div>
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
