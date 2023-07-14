import React from 'react';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    AlertOutlined,
    BellOutlined,
    BookOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideMenu = ({ collapsed, selectedKey, handleMenuClick }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                <h1 className="heading">Jenssen</h1>
            </div>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                selectedKeys={[selectedKey]}
                onClick={handleMenuClick}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <span>Home</span>
                </Menu.Item>
                <Menu.Item key="2" icon={<AlertOutlined />}>
                    <span>Service Risk Report</span>
                </Menu.Item>
                <Menu.Item key="3" icon={<BellOutlined />}>
                    <span>Notifications</span>
                </Menu.Item>
                <Menu.Item key="4" icon={<BookOutlined />}>
                    <span>Reports</span>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideMenu;
