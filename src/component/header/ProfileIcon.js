import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../App.css';

const ProfileIcon = () => {
  return (
    <div className="profile-icon">
      <div className="avatar-wrapper">
        <Avatar size="large" icon={<UserOutlined />} className="icon" />
      </div>
      <span>Username</span>
    </div>
  );
};

export default ProfileIcon;
