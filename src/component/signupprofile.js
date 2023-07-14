import React, { useState } from 'react';
import { Avatar, Modal, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const SignUpProfile = ({ onClick }) => {
  const [loginVisible, setLoginVisible] = useState(false);

  const handleLoginCancel = () => {
    setLoginVisible(false);
  };

  const handleLoginSubmit = (values) => {
    console.log('Login form submitted:', values);
    setLoginVisible(false);
  };

  return (
    <>
      <div className="profile-icon" onClick={() => setLoginVisible(true)}>
        <div className="avatar-wrapper">
          <Avatar size="large" icon={<UserOutlined />} className="icon" />
        </div>
        <span>Username</span>
      </div>

      <Modal
        title="Login"
        visible={loginVisible}
        onCancel={handleLoginCancel}
        footer={null}
      >
        <Form onFinish={handleLoginSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SignUpProfile;
