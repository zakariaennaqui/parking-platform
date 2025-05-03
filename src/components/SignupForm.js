// src/components/SignupForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SignupForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [carPlate, setCarPlate] = useState('');
  const [newId, setNewId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4().slice(0, 8); // Génère un ID court
    const newUser = {
      id,
      name,
      carPlate,
      paid: false,
    };
    onRegister(newUser); // Ajoute l'utilisateur
    setNewId(id); // Affiche l'ID généré
    setName('');
    setCarPlate('');
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Inscription</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Matricule"
          value={carPlate}
          onChange={(e) => setCarPlate(e.target.value)}
          required
        />
        <button type="submit">S’inscrire</button>
      </form>

      {newId && (
        <p style={{ color: 'green' }}>
          ✅ Votre identifiant est : <strong>{newId}</strong><br />
          (Notez-le pour vous connecter plus tard)
        </p>
      )}
    </div>
  );
};

export default SignupForm;
