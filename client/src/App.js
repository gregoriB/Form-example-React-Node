import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080", {
      method: 'POST',
      body: JSON.stringify({ "first": firstName, "last": lastName }),
      headers: { 'Content-Type': 'applications/json' }
    });
    const json = await response.json();
    setMessage(json);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type='text' placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)} />
        <button>SUBMIT</button>
      </form>
      <h1 className='display'>{message}</h1>
    </div>
  );
}

export default App;