import React, { useState } from 'react';

const NewTicketForm = () => {
  const [ticket, setTicket] = useState({
    title: '',
    description: '',
    priority: '',
    category: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the ticket data to the server
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
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={ticket.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Priority:
        <select
          name="priority"
          value={ticket.priority}
          onChange={handleInputChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={ticket.category}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Create Ticket</button>
    </form>
  );
}

export default NewTicketForm;
