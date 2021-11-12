import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function CancerMenu(){
    return (
            <Sider width={200} className="site-layout-background" style={{ height: '700px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >
                        All Sites
                    </Menu.Item>
                    <Menu.Item key="2" >
                        Head and Neck
                    </Menu.Item>
                    <Menu.Item key="3" >
                        Gynecology
                    </Menu.Item>
                    <Menu.Item key="4" >
                        Lymphoma
                    </Menu.Item>
                    <Menu.Item key="5" >
                        Gastrointestinal
                    </Menu.Item>
                    <Menu.Item key="6" >
                        Genitourinary
                    </Menu.Item>
                    <Menu.Item key="7" >
                        Breast
                    </Menu.Item>
                    <Menu.Item key="8" >
                        CNS
                    </Menu.Item>
                    <Menu.Item key="9" >
                        Lung
                    </Menu.Item>
                </Menu>
            </Sider>
    )
}