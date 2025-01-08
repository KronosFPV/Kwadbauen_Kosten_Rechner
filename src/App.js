import React, { useState } from 'react';
import './App.css';

function App() {
  // State für Eingabefelder
  const [materialsCost, setMaterialsCost] = useState('');
  const [laborCost, setLaborCost] = useState('');
  const [overhead, setOverhead] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [profit, setProfit] = useState(0);

  // Berechnung der Rentabilität
  const calculateProfit = () => {
    const totalCost = parseFloat(materialsCost) + parseFloat(laborCost) + parseFloat(overhead);
    const calculatedProfit = parseFloat(sellingPrice) - totalCost;
    setProfit(calculatedProfit);
  };

  return (
    <div className="App">
      <h1>Drone Profitability Calculator</h1>
      <div className="calculator">
        <label>
          Materialkosten:
          <input
            type="number"
            value={materialsCost}
            onChange={(e) => setMaterialsCost(e.target.value)}
          />
        </label>
        <label>
          Arbeitskosten:
          <input
            type="number"
            value={laborCost}
            onChange={(e) => setLaborCost(e.target.value)}
          />
        </label>
        <label>
          Gemeinkosten (Overhead):
          <input
            type="number"
            value={overhead}
            onChange={(e) => setOverhead(e.target.value)}
          />
        </label>
        <label>
          Verkaufspreis:
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </label>
        <button onClick={calculateProfit}>Profit berechnen</button>
        <h2>Gewinn: {profit >= 0 ? `€${profit}` : `Verlust von €${-profit}`}</h2>
      </div>
    </div>
  );
}

export default App;
