import React from 'react';

function UserInfo({ user }) {
  return (
    <div>
      <h2>Informations utilisateur</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nom:</strong> {user.name}</p>
      <p><strong>Matricule:</strong> {user.carPlate}</p>
      <p>
        <strong>Statut:</strong>{' '}
        {user.paid ? '✅ Payé' : '❌ Non payé'}
      </p>
      {user.paid && (
        <p><strong>Mode de paiement:</strong> {user.paymentMethod}</p>
      )}
    </div>
  );
}

export default UserInfo;
