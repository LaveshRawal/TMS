import React, { useState } from 'react';

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
        Title:
        <input
          type="text"
          name="title"
          value={ticket.title}
          onChange={handleChange}
        />
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
      <label>
        Status:
        <select
          name="status"
          value={ticket.status}
          onChange={handleChange}
        >
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </label>
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
