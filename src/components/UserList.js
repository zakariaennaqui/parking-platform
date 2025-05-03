import React from 'react';

const UserList = ({ usersData, onSelectUser, onDeleteUser }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Liste des utilisateurs</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nom</th>
            <th style={thStyle}>Matricule</th>
            <th style={thStyle}>Payé</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.carPlate}</td>
              <td style={tdStyle}>{user.paid ? 'Oui' : 'Non'}</td>
              <td style={tdStyle}>
                <button onClick={() => onSelectUser(user.id)}>Rechercher</button>
                <button onClick={() => onDeleteUser(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 🎨 Styles simples
const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
};

export default UserList;
