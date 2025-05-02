import React, { useState } from 'react';

function UserForm({ onSearch }) {
  const [inputId, setInputId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputId.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Entrer ID utilisateur :
        <input
          type="text"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
      </label>
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default UserForm;
