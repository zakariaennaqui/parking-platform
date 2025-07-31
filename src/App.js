import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';
import Payment from './components/Payment';
import UserList from './components/UserList';
import SignupForm from './components/SignupForm';

function App() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    carPlate: '',
    paid: false,
  });

  // Charger les utilisateurs depuis localStorage
  const loadUsers = () => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  };

  const [usersData, setUsersData] = useState(loadUsers);

  // Sauvegarder les utilisateurs dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersData));
  }, [usersData]);

  // Rechercher un utilisateur par ID
  const handleSearch = (id) => {
    const found = usersData.find(u => u.id === id);
    setUser(found || null);
  };

  // Enregistrer un paiement
  const handlePayment = (method) => {
    if (user) {
      const updated = usersData.map(u =>
        u.id === user.id ? { ...u, paid: true, paymentMethod: method } : u
      );
      setUsersData(updated);
      setUser({ ...user, paid: true, paymentMethod: method });
    }
  };

  // Connexion admin
  const handleAdminLogin = () => {
    if (adminPassword === 'admin') {
      setIsAdmin(true);
    } else {
      alert('Mot de passe incorrect !');
    }
  };

  // Ajouter un utilisateur (depuis interface admin)
  const handleAddUser = (event) => {
    event.preventDefault();
    setUsersData([...usersData, newUser]);
    setNewUser({ id: '', name: '', carPlate: '', paid: false });
    alert('Utilisateur ajouté avec succès!');
  };

  // Supprimer un utilisateur
  const handleDeleteUser = (id) => {
    const updatedUsers = usersData.filter(user => user.id !== id);
    setUsersData(updatedUsers);
    setUser(null);
    alert('Utilisateur supprimé!');
  };

  // Ajouter un utilisateur depuis formulaire d’inscription
  const handleRegister = (newUser) => {
    setUsersData([...usersData, newUser]);
  };

  return (
    <div className="App">
      <img
        src="/logo.png"
        alt="Logo Parking"
        style={{ height: '80px', marginBottom: '1rem' }}
      />
      <h1>Plateforme Parking</h1>

      {/* Formulaire d’inscription */}
      <SignupForm onRegister={handleRegister} />

      {/* Formulaire de recherche utilisateur (connexion) */}
      <UserForm onSearch={handleSearch} />

      {/* Interface admin protégée */}
      <div style={{ marginTop: '2rem' }}>
        {!isAdmin ? (
          <>
            <input
              type="password"
              placeholder="Mot de passe admin"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <button onClick={handleAdminLogin}>Voir liste des utilisateurs</button>
          </>
        ) : (
          <>
            <UserList
              usersData={usersData}
              onSelectUser={handleSearch}
              onDeleteUser={handleDeleteUser}
            />

            <h3>Ajouter un utilisateur (Admin)</h3>
            <form onSubmit={handleAddUser}>
              <input
                type="text"
                placeholder="ID"
                value={newUser.id}
                onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Nom"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Matricule"
                value={newUser.carPlate}
                onChange={(e) => setNewUser({ ...newUser, carPlate: e.target.value })}
                required
              />
              <select
                value={newUser.paid}
                onChange={(e) => setNewUser({ ...newUser, paid: e.target.value === 'true' })}
              >
                <option value="false">Non payé</option>
                <option value="true">Payé</option>
              </select>
              <button type="submit">Ajouter</button>
            </form>
          </>
        )}
      </div>

      {/* Affichage des infos utilisateur + paiement */}
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
