import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SideMenu from './SideMenu';
import SearchBar from './header/SearchBar';
import BellIcon from './header/BellIcon';
import ProfileIcon from './header/ProfileIcon';

const { Header, Content } = Layout;

const AppLayout = ({
  collapsed,
  setCollapsed,
  selectedKey,
  handleMenuClick,
  getMenuContent,
  notificationVisible,
  bellIconRef,
  handleBellIconClick,
}) => {
  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu
        collapsed={collapsed}
        selectedKey={selectedKey}
        handleMenuClick={handleMenuClick}
      />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggleMenu} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggleMenu} />
          )}
          <SearchBar />
          <BellIcon
            bellIconRef={bellIconRef}
            notificationVisible={notificationVisible}
            handleBellIconClick={handleBellIconClick}
          />
          <ProfileIcon />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
          {getMenuContent()}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
