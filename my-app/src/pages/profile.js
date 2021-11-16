import React,{useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import NavBarUser from '../components/NavBarUser';
import {Card, Avatar, Typography, Row, Col, Checkbox} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const {Paragraph} = Typography;

function Profile() {

    const [editableStr, setEditableStr] = useState('This is an editable text.');

    return (
        <Fragment>
            <NavBarUser></NavBarUser>
            <div style={{ position: 'absolute', top: 200, left: '5%', width: '25%' }}>
                <Card size='default' >
                    <Avatar size={64} icon={<UserOutlined />} style={{ marginLeft: '42%', marginBottom: '12%' }} />
                    <p style={{ textAlign: 'center' }}>First Name: <span>User's First Name</span></p>
                    <p style={{ textAlign: 'center' }}>Last Name: <span>User's Last Name</span></p>
                    <p style={{ textAlign: 'center' }}>Organization: <span>User's organization</span></p>
                    <p style={{ textAlign: 'center' }}>Profession: <span>User's profession</span></p>
                    <p style={{ textAlign: 'center' }}>Post graduation year: <span>User's post grad year</span></p>
                </Card>
            </div>
            <div style={{ position: 'absolute', top: 200, right: '5%', width: '55%' }}>
                <Card title="My Account" >
                    <Row>
                    <Col span ={5}>Username: </Col> 
                    <Col span ={19}><Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph></Col>
                    </Row>
                    <Row>
                    <Col span ={5}>Email: </Col> 
                    <Col span ={19}><Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph></Col>
                    </Row>
                    <Row>
                    <Col span ={5}>Password: </Col> 
                    <Col span ={19}><Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph></Col>
                    </Row>
                </Card>
            </div>
            <div style={{ position: 'absolute', top: 500, right: '5%', width: '55%' }}>
                <Card title="Choose Cancer Types" >
                    <Row>
                    <Col span ={8}>Head and Neck </Col> 
                    <Col span ={16}><Checkbox onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Gynecologic </Col> 
                    <Col span ={16}><Checkbox onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Gastrointestinal </Col> 
                    <Col span ={16}><Checkbox onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Pediatric </Col> 
                    <Col span ={16}><Checkbox onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Genitourinary </Col> 
                    <Col span ={16}><Checkbox onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                </Card>
            </div>
        </Fragment>
    );
};

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
export default Profile;