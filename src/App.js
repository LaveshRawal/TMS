import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Header_Navbar/Navbar";
import TicketList from "./pages/TicketList";
import NewTicketForm from "./components/CreateTicket/NewTicketForm";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  
  lineHeight: "64px",
  backgroundColor: "#4895ef",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "10px",
  color: "#fff",
  backgroundColor: "#156ee9",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "20px",
  color: "#fff",
  backgroundColor: "#4895ef",
  fontSize: "1rem",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4895ef",
};

const App = () => {
  return (
    <BrowserRouter>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>
            <Nav />
          </Header>
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<TicketList />} />
                <Route path="/newticketform" element={<NewTicketForm />} />

                <Route path="*" element={<h1>Page not Found</h1>} />
              </Routes>
            </Content>
          </Layout>
          <Footer style={footerStyle}>
            <Footer />
          </Footer>
        </Layout>
      </Space>
    </BrowserRouter>
  );
};

export default App;
