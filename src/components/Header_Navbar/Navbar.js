import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const index = () => {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/dashboad">Dashboad</Link>
      <Link to="/newticketform">Create a Request</Link>
      <Link to="/createuserac">Create User Account</Link>
      <Link to="/sla">Create Service Contract</Link>
      
      <Space direction="vertical" className='search'>
      <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
     </Space>
     
    </nav>
  )
}

export default index