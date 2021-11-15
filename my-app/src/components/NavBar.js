import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { Layout, Menu, Drawer, Button, Form, Input, Space, Row, Col, Select, Checkbox} from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const right1 = { position: 'absolute', top: 0, right: 0 };
const right2 = { position: 'absolute', top: 0, right: 100 };

export default function NavBar(){

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const showDrawer1 = () => {
    setVisible1(true);
  }
  const showDrawer2 = () => {
    setVisible2(true);
  }
  const onClose = () => {
    setVisible1(false);
    setVisible2(false);
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item >Logo</Menu.Item>
        <SubMenu title = "About">
          <Menu.Item>About Us</Menu.Item>
          <Menu.Item>In the News</Menu.Item>
          <Menu.Item>Testimonials</Menu.Item>
        </SubMenu>
        <Menu.Item ><NavLink to = '/cases'>Cases</NavLink></Menu.Item>
        <SubMenu title = "Help">
          <Menu.Item>How to Use</Menu.Item>
          <Menu.Item>Fundamentals</Menu.Item>
        </SubMenu>
        <Menu.Item style={right2}><Button type="primary" onClick={showDrawer1}>Sign In</Button></Menu.Item> 
        <Menu.Item style={right1}><Button type="primary" onClick={showDrawer2}>Register</Button></Menu.Item>     
      </Menu>

      <Drawer title="Sign In" width={500} placement="right" onClose={onClose} visible={visible1}>
      <Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}} initialValues={{remember: true,}}
      onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item label="Username" name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
        <div>Forget password?</div>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Drawer>

      <Drawer title="Create a new account" width={720} onClose={onClose} visible={visible2} bodyStyle={{ paddingBottom: 80 }}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter user name' }]}>
                  <Input placeholder="User name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter email' }]}>
                  <Input placeholder="Email"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="irstName" label="First Name" rules={[{ required: true, message: 'Please enter your first name' }]}>
                  <Input placeholder="First name"></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Please enter your last name' }]}>
                  <Input placeholder="Last name"></Input>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="pwd" label="Password" rules={[{ required: true, message: 'Please enter password' }]} >
                  <Input placeholder="Password"></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="org" label="Hospital/University/Organization" rules={[{ required: true, message: 'Please enter your organization' }]}>
                <Input placeholder="Hospital/University/Organization"></Input>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item name="profession" label="Profession" rules={[{ required: true, message: 'Please select a profession' }]} >
                  <Select placeholder="Select a profession">
                    <Option>Resident Physician</Option>
                    <Option>Medical Student</Option>
                    <Option>Medical Physicist</Option>
                    <Option>Dosimetrist</Option>
                    <Option>Radiation Therapist</Option>
                    <Option>Other</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="ack" valuePropName="checked" wrapperCol={{span: 24}} rules={[{ required: true, message: 'Please check the acknowledgement' }]}>
                  <Checkbox> I would like to be informed about important site updates and programs for contouring education and research.</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 16,}}>
                  <Button type="primary" htmlType="submit">Submit</Button>
                  </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>



    </Header>
    )
}