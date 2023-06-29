import {
    AppstoreOutlined,
    ContainerOutlined,
    DashboardFilled,
    DashboardOutlined,
    DashboardTwoTone,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
import { Button, Menu } from 'antd'
import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub3','sub5'];
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }
    const items = [
      
        getItem('Dashboard', 'sub1', <DashboardFilled />, [
          getItem('Commerce', '5'),
          getItem('Analytics', '6'),
          getItem('Crypto', '7'),
          getItem('Helpdesk', '8'),
          getItem('Monitoring', '9'),
            getItem('Monitoring', '9'),
            getItem('Fitness', '10'),
        ]),
        getItem('Application', 'sub2', <DashboardFilled />, [
            getItem('Commerce', '5'),
            getItem('Analytics', '6'),
            getItem('Crypto', '7'),
            getItem('Helpdesk', '8'),
          ]),
          getItem('Elements', 'sub3', <DashboardFilled />, [
            getItem('Commerce', '5'),
            getItem('Analytics', '6'),
            getItem('Crypto', '7'),
            getItem('Helpdesk', '8'),
            
          ]),
          getItem('Plugins', 'sub4', <DashboardFilled />, [
            getItem('Commerce', '5'),
            getItem('Analytics', '6'),
            getItem('Crypto', '7'),
            getItem('Helpdesk', '8'),
          ]),
          getItem('Datagrid', 'sub5', <DashboardFilled />, [
            getItem('Commerce', '5'),
            getItem('Analytics', '6'),
            getItem('Crypto', '7'),
            getItem('Helpdesk', '8'),
          ]),
       
      ];
  return (
   <>
    <div className='border flex flex-col border-black xsm:w-[60px] sm:w-[60px] md:w-[60px] z-50 lg:w-[260px] h-full fixed bg-black'>
   <Button className='bg-orange-200 items-center flex justify-around w-[60%] mx-auto'>
    <GrAdd  className='sm: visible md:visible'/>
    <small className='sm:invisible md:invisible lg:visible'>Add New Item</small>
   </Button>
        
        <Menu theme='dark' 
        items = {items}
        mode="inline"
        inlineCollapsed={collapsed}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        
        />
    </div>
        <div className='xsm:ml-[80px] sm:ml-[30px] md:ml-[60px] lg:ml-[260px]'>
            <Outlet />
        </div>

 
   </>
  )
}

export default Sidebar