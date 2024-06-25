import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  const [accounts, setAccounts] = useState(() => {
    const savedAccounts = localStorage.getItem('ATM_APP_');
    if (savedAccounts) {
      try {
        return JSON.parse(savedAccounts);
      } catch (error) {
        console.error("Error parsing accounts from localStorage", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('ATM_APP_', JSON.stringify(accounts));
  }, [accounts]);

  const addAccount = (newAccount) => {
    setAccounts(prevAccounts => [...prevAccounts, newAccount]);
  };
console.log(accounts.length);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/signup" element={<SignUp addAccount={addAccount} accounts={accounts} />} />
        <Route path="/login" element={<Login accounts={accounts} />} />
      </Routes>
    </div>
  );
}

export default App;
