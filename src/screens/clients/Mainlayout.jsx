import React from 'react';
import { Layout } from 'antd';
import CustomHeader from './Header';
import DrawerNavigation from './DrawerNavigation';

const { Content } = Layout;

const Mainlayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CustomHeader />
      <Layout>
        <DrawerNavigation />
        <Layout>
          <Content>
            {/* Your dashboard content here */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
