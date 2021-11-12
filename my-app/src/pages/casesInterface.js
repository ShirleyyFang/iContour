import React from 'react'
import NavBarUser from '../components/NavBarUser';
import CancerMenu from '../components/CancerMenu';
import {Layout, Input} from 'antd';

const {Header, Content} = Layout;
const {Search} = Input;
const onSearch = value => console.log(value);

function CasesInterface() {
  return (
    <Layout>
        <Header></Header>
        <NavBarUser></NavBarUser>
        <Layout>
        <CancerMenu></CancerMenu>
        <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                </div>
            </Content>
        </Layout>
    </Layout>
  );
}

export default CasesInterface;