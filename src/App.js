import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';
import Payment from './components/Payment';
import usersData from './data/users';

function App() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = (id) => {
    const found = usersData.find(u => u.id === id);
    setUser(found || null);
  };

  const handlePayment = (method) => {
    if (user) {
      setUser({ ...user, paid: true, paymentMethod: method });
    }
  };

  return (
    <div className="App">
      <img src="/Capture d'écran 2025-03-23 023405.png" alt="Logo Parking" style={{ height: '80px', marginBottom: '1rem' }} />
<h1>Plateforme Parking</h1>

      <UserForm onSearch={handleSearch} />
      {user && (
        <>
          <UserInfo user={user} />
          {!user.paid && <Payment onPay={handlePayment} />}
        </>
      )}
    </div>
  );
}

export default App;
