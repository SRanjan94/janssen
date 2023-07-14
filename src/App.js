import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Avatar, Cascader } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, AlertOutlined, BellOutlined, BookOutlined, SearchOutlined, BellTwoTone, UserOutlined } from '@ant-design/icons';
import AppLayout from './component/AppLayout';
import ProjectionTab from './component/ProjectionTab';
import './App.css';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const [notificationVisible, setNotificationVisible] = useState(false);
  const bellIconRef = useRef(null);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const getMenuContent = () => {
    switch (selectedKey) {
      case '1':
        return 'Home Page';
      case '2':
        return <ProjectionTab />;
      case '3':
        return 'Notification Page';
      case '4':
        return 'Reports Page';
      default:
        return 'Page Not Found';
    }
  };

  const handleBellIconClick = () => {
    setNotificationVisible(!notificationVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bellIconRef.current && !bellIconRef.current.contains(event.target)) {
        setNotificationVisible(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <AppLayout
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        selectedKey={selectedKey}
        handleMenuClick={handleMenuClick}
        getMenuContent={getMenuContent}
        notificationVisible={notificationVisible}
        bellIconRef={bellIconRef}
        handleBellIconClick={handleBellIconClick}
      />
    </div>
  );
};

export default App;
