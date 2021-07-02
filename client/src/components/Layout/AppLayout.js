import { Layout, Menu, Row } from 'antd';
import Cookie from 'js-cookie';
import { NavLink } from 'react-router-dom';
import { LogoutOutlined,HeartFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AppLayout = (props) => {
  const isAuthenticated = Cookie.get('isAuthenticated');
  var showLogout = "";
  if (isAuthenticated) {
    showLogout = (
      <Menu.Item key="2" style={{ float: 'right' }}>
      <LogoutOutlined />  <NavLink to="/Logout">Logout</NavLink> 
      </Menu.Item>
    );
  }
  else{
    showLogout = (
      <Menu.Item key="2" style={{ float: 'right' }}>
      <LogoutOutlined />  <NavLink to="/Login">Login</NavLink> 
      </Menu.Item>
    );
  }
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header
        style={{ backgroundColor: '#fff', boxShadow: '0px 8px 8px -6px rgba(0,0,0,.5)' }}
      >
        <Menu theme="light" 
          style={{ boxShadow: '0px 8px 8px -6px rgba(0,0,0,.5)'}}
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <a href="/dashboard">Drooble</a>
          </Menu.Item>
          {showLogout}
        </Menu>
      </Header>
      <Content style={{ backgroundColor: '#fff' }}>
        <Row
          style={{ padding: '50px',margin:'auto' }}
          justify="space-around"
        >
          {props.children}
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
        Drooble 2021 Made with <HeartFilled style={{color:'red'}} /> in India
      </Footer>
    </Layout>
  );
};
export default AppLayout;
