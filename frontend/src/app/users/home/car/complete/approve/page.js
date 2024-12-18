'use client'

import React from 'react'
import { Layout } from 'antd'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'
import { Content } from 'antd/lib/layout/layout'
const { Header } = Layout

function approve() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />
      
      <Layout style={{ padding: '0px 20px'}}>
        {/* Sidebar */}
        <Sidebar />
        
        {/* เนื้อหาหลักของหน้า */}
        <Layout style={{  padding: '0px 20px' }}>
          <Content style={{ padding: '24px', backgroundColor: '#fff' }}>
            <h2>Welcome, หน้ารออนุมัติ</h2>
            {/* เนื้อหาหลักที่ต้องการแสดง */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default approve