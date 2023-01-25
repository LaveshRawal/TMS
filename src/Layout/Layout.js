import Navbar from "../components/Navbar/Navbar"
import React from 'react';
import TicketList from "../components/TicketList";
import Footer from "../components/Footer"
import { useParams } from "react-router";
import "./style.css"

const Container = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="header"><Navbar /></div>
      
      <div className="footer"><Footer /></div>
    </div>
  );
};

export default Container;
