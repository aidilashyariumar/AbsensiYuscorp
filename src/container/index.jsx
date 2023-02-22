import React, { useState } from 'react'
import './index.css'
import { Button, Layout, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import { Content, Header } from 'antd/es/layout/layout';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  CalendarOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  UserOutlined,
  DatabaseOutlined,
  SettingOutlined ,
  UnorderedListOutlined,
  LogoutOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router';
// const { SubMenu } = Menu;


function Home(){
  const url = window.location.pathname.split('/')
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
 
  const {
    token: { colorBgContainer },
  } = theme.useToken();
return (
    // <Router>
      
    //     <div className="navigation">
    //       <Link to="/">Home</Link> 
    //       <Link to="about"> About</Link> 
    //       <Button/>
    //       <ButtonIcon/>
    //     </div>
    // <h1>ini aidil</h1>
    //   <Routes>
    //         <Route exact path="/" element={<ButtonBatal/>} />
    //         <Route path="/about"  element={<AboutMe />} />
    //   </Routes>
        
        
    // </Router>
    

    

    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img src="  " alt="" />
        <h4 className='JUDUL'>Main Navigator</h4>
        {/* <Menu theme='dark' mode='inline' defaultSelectedKeys={[1]}>
          <Menu.Item key={'1'} onClick= {() => navigate('/dashboard')} style={{backgroundColor:url.includes('dashboard')? 'blue' : ''}} >Dashboard </Menu.Item>
          <Menu.Item  key={'2'} onClick= {() => navigate('data-permohonan-cuti')} style={{backgroundColor:url.includes('data-permohonan-cuti')? 'blue' : ''}}>Permohonan cuti</Menu.Item>
          <Menu.Item key={'3'}>absen</Menu.Item>
        </Menu>  */}
         <Menu
         onClick={({key}) => {navigate(key)}  }
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '',
              icon: <HomeOutlined />,
              label: 'Dashboard',
            },
            {
            
              key:'master-data',
              icon: <DatabaseOutlined />,
              label: 'Master Data',
              children:[
                {
                  icon:<CheckCircleOutlined />,
                  label:"data karyawan",
                  key:'data-karyawan'
                },
                {
                  icon:<CheckCircleOutlined />,
                  label:"data jam kerja",
                  key: 'data-jam-kerja'
                },
                {
                  icon:<CheckCircleOutlined />,
                  label:"data jabatan",
                  key:'data-jabatan'
                },
                {
                  icon:<CheckCircleOutlined />,
                  label:"data lokasi",
                  key:'data-lokasi'
                }
              ]
            },
            {
              key: 'data-permohonan-cuti',
              icon: <CalendarOutlined />,
              label: 'Data Permohonan Cuti',
              
              
            },
            {
              key: 'data-absensi',
              icon: <UnorderedListOutlined />,
              label: 'Data Absensi',
             
            },
            {
              key: 'pengaturan-web',
              icon: <SettingOutlined />,
              label: 'Pengaturan Web',
            },
            {
              key: 'admin',
              icon: <UserOutlined />,
              label: 'Admin',
            },
            {
              key: 'logout',
              icon: <LogoutOutlined />,
              label: 'Keluar',
            },
          ]}
       
        />
      {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined/>}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2 " icon={<LaptopOutlined />}>
          <Link to="/data-permohonan-cuti">Data Permohonan Cuti</Link>
        </Menu.Item>
        <Menu key="sub1" icon={<NotificationOutlined />} title="Menu 3">
          <Menu.Item key="3"><Link> Menu 3.1</Link></Menu.Item>
          <Menu.Item key="4">Menu 3.2</Menu.Item>
          <Menu.Item key="5">Menu 3.3</Menu.Item>
        </Menu>
      </Menu> */}

        
      </Sider>
      <Layout className="site-layout">
        <Header className='wrap-header'
          style={{
            padding: "0 16px",
            background: colorBgContainer,
          }}
        >
          <div className='header-left'>

          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        
          <Button type='text' className='logout' > 25-03-2023</Button>
          </div>
          <div className='header-right'>

          <Button type='Primary' className='logout' icon={<LaptopOutlined />}/>
          <Button type='Primary' className='logout' icon={<CalendarOutlined />}/>
          <Button type='Primary' className='logout' icon={<NotificationOutlined />}/>
          </div>
      
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
          
        </Content>
      <div className="footer">
        <p>&copy; Absensi 2023</p>
        <p>Aidil Ashyari Umar</p>
      </div>
      </Layout>
    </Layout>
)
}

export default Home;