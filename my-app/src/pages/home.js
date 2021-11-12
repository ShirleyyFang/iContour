import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Carousel, Row, Col, Space, Image } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};


function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Space></Space>
      <div>
      <Row>
          <Col span={6} style={{backgroundColor:'#f5f5f5'}}></Col>
              <Col span={12}>
                  <Carousel afterChange={onChange}>
                      <div>
                          <h3 style={contentStyle}>1</h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}>2</h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}>3</h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}>4</h3>
                      </div>
                  </Carousel>
              </Col>
          <Col span={6} style={{backgroundColor:'#f5f5f5'}}></Col>
      </Row>
      <Row >
      <Col span={8} style={{backgroundColor:'#d9d9d9', height:'500px'}}></Col>
      <Col span={8} style={{backgroundColor:'#e6f7ff', height:'500px'}}></Col>
      <Col span={8} style={{backgroundColor:'#d9d9d9', height:'500px'}}></Col>
      </Row>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;