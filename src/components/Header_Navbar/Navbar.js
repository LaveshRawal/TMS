import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import {SearchOutlined} from '@ant-design/icons';

const index = () => {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/dashboad">Dashboad</Link>
      <Link to="/newticketform">Create a Request</Link>
      <Link to="/createuserac">Create User Account</Link>
      <Link to="/sla">Create Service Contract</Link>
      <div className="search">
            <form action="#">
                <input type="text"
                    placeholder=" Search Tickets"
                    name="search" />
                <button>
                <SearchOutlined />
                </button>
            </form>
        </div>
    </nav>
  )
}

export default index