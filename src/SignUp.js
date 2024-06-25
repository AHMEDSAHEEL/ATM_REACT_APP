import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory in React Router v6

const SignUp = ({ addAccount,accounts }) => {
  
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newPassword) {
      alert('Please fill in all fields');
      return;
    }
    const newAccount = {
      id: accounts.length ? accounts[accounts.length-1].id+1: 1,
      name: newName,
      password: newPassword
    };
    addAccount(newAccount);
    alert('Account created successfully!');
    navigate('/login'); // use navigate function to redirect
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Name: </label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <label>Password: </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
