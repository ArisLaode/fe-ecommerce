import {Layout , Row} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";

const { Content } = Layout;

function Index() {
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
            Page Index Product
        </Row>
        </div>
      </Content>
        <FooterApp />
          </Layout>
  );
}


export default Index;