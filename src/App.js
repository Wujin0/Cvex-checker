import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [wallet, setWallet] = useState('');
  const [trades, setTrades] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrades(null);
    const res = await axios.post('http://localhost:5000/api/trades', { walletAddress: wallet });
    setTrades(res.data);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 24 }}>
      <h1>CVEX İşlem Geçmişi</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cüzdan adresi yazın"
          value={wallet}
          onChange={e => setWallet(e.target.value)}
          style={{ width: 400, padding: 8 }}
        />
        <button type="submit" style={{ marginLeft: 8, padding: 8 }}>Göster</button>
      </form>
      {trades && (
        <div>
          <h2>İşlemler</h2>
          <pre>{JSON.stringify(trades, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;