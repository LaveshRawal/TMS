import React, { useState } from 'react';
import "./style.css"

function TicketForm() {
  const [ticket, setTicket] = useState({
    title: '',
    description: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    priority: '',
    assignee: '',
    category: '',
    customer: '',
    customerEmail: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send the ticket data to the server or perform some other action here
    console.log(ticket);
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>
    Requester:
    <select
      name="Requester"
      value={ticket.Requester}
      onChange={handleChange}
    >
      <option value="administrator">administrator</option>
      <option value="medium">Guest</option>
      <option value="Guest">Lavesh Rawal</option>
      <option value="Rupal Deshmukh">Rupal Deshmukh</option>
      <option value="Vikramjeet">Vikramjeet Bhehra</option>
      <option value="Saurabh Binsnoi">Saurabh Binsnoi</option>
    </select>
  </label>

  <label>
  Request Type:
  <select
    name="RequestType"
    value={ticket.RequestType}
    onChange={handleChange}
  >
    <option value="Not Specified">Not Specified</option>
    <option value="Incedent">Incedent</option>
    <option value="RequestInformation">Request Information</option>
      </select>
</label>

<label>
Status:
<select
  name="status"
  value={ticket.status}
  onChange={handleChange}
>
  <option value="open">Open</option>
  <option value="closed">Closed</option>
  <option value="wfc">waiting for customer</option>
  <option value="hold">on hold</option>
  <option value="PIA">Pending for Internal Action</option>
</select>
</label>

<label>
Mode:
<select
  name="Mode"
  value={ticket.Mode}
  onChange={handleChange}
>
  <option value="NotSpecified">Not Specified</option>
  <option value="chat">chat</option>
  <option value="email">email</option>
  <option value="mobile">mobile</option>
  <option value="webform">web form</option>
</select>
</label>

<label>
Group:
<select
  name="Group"
  value={ticket.Group}
  onChange={handleChange}
>
  <option value="NotSpecified">Not Specified</option>
  <option value="HP">Hardware Problems</option>
  <option value="NP">Network Problems</option>
  <option value="LP">Laptop/Desktop Problem</option>
  <option value="PP">Printer Problems</option>
</select>
</label>

<label>
Technician:
<select
  name="Mode"
  value={ticket.Technician}
  onChange={handleChange}
>
  <option value="NotSpecified">Not Specified</option>
  <option value="administrator">administrator</option>
  <option value="medium">Guest</option>
  <option value="Guest">Lavesh Rawal</option>
  <option value="Rupal Deshmukh">Rupal Deshmukh</option>
  <option value="Vikramjeet">Vikramjeet Bhehra</option>
  <option value="Saurabh Binsnoi">Saurabh Binsnoi</option>
</select>
</label>

      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={ticket.description}
          onChange={handleChange}
        />
      </label>
      <br />
      
      <br />
      <label>
        Created At:
        <input
          type="text"
          name="createdAt"
          value={ticket.createdAt}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Updated At:
        <input
          type="text"
          name="updatedAt"
          value={ticket.updatedAt}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Priority:
        <select
          name="priority"
          value={ticket.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">critical</option>
        </select>
      </label>
      <br />
      <label>
        Assignee:
        <input
          type="text"
          name="assignee"
          value={ticket.assignee}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={ticket.category}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Customer:
        <input
          type="text"
          name="customer"
          value={ticket.customer}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Customer Email:
        <input
       type="email"
       name="customerEmail"
       value={ticket.customerEmail}
       onChange={handleChange}
     />
</label>
<br />
<input type="submit" value="Create Ticket" />
</form>
);
}

export default TicketForm;
