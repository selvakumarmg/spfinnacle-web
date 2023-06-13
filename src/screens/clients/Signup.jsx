import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const CreateAccount = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // Implement your account creation logic here
      // Validate form data and perform necessary actions
      console.log('Account creation submitted!', values);
      setLoading(false);
    } catch (error) {
      console.error('Error creating account:', error);
      setLoading(false);
    }
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please enter your first name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please enter your last name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email address' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please enter a password' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAccount;
