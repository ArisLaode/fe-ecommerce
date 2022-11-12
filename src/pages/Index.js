import React, { useState, useEffect } from 'react';
import {Layout , Row, Col} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import Rest from "../utils/Rest";
import {read} from '../utils/Config';

const { Content } = Layout;

function Index() {

const [data, setData] = useState([])
    useEffect(() => {
        Rest.get(read).then((response) => {
            setData(response);
        });
        }, []);
    if (!data) return null;
    return (
        <Layout style={{ minHeight: '95vh' }}>
      <HeaderApp />
      <Content
      style={{
        padding: '0 50px',
      }}
      >
        <div className="site-layout-content">
        <Row gutter={16}>
            <Col>
                <p>
                    {data.id}
                </p>
                <p>
                    {data.name}
                </p>
                <p>
                    {data.description}
                </p>
            </Col>
        </Row>
        </div>
      </Content>
        <FooterApp />
      </Layout>
      );
}


export default Index;