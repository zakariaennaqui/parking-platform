import React, { useState } from 'react';

function Payment({ onPay }) {
  const [method, setMethod] = useState('Carte');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPay(method);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Payer maintenant</h3>
      <label>
        Mode de paiement :
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="Carte">Carte</option>
          <option value="Espèces">Espèces</option>
          <option value="Mobile">Mobile</option>
        </select>
      </label>
      <button type="submit">Valider le paiement</button>
    </form>
  );
}

export default Payment;
