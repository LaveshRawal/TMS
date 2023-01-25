import React, { useState, useEffect } from "react";
import "./TicketList.css";
import axios from "axios";

const TicketList = (props) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tickets")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Tickets Registered</h1>
      {tickets.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Category</th>
              <th>Customer</th>
              <th>Customer Email</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket,index) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.createdAt}</td>
                <td>{ticket.updatedAt}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.assignee}</td>
                <td>{ticket.category}</td>
                <td>{ticket.customer}</td>
                <td>{ticket.customerEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Tickets found</p>
      )}
    </div>
  );
};

export default TicketList;
