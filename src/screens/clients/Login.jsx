import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 400, padding: 24, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: 8 }}>
        <Title level={3} style={{ marginBottom: 24 }}>Login</Title>
        <Form name="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            // rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input value='admin' placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            // rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password value='123' placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Log in</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
