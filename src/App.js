import React, { useState } from 'react';
import './App.css';

function App() {
  // State für Eingabefelder
  const [materialsCost, setMaterialsCost] = useState(''); // Verbrauchsmaterial/Werkzeug
  const [workTime, setWorkTime] = useState(''); // Arbeitszeit in Minuten
  const [shippingCost, setShippingCost] = useState(''); // Versandkosten
  const [testTime, setTestTime] = useState(''); // Testfliegen/Tuning in Minuten
  const [sellingPrice, setSellingPrice] = useState(''); // Verkaufspreis
  const [profit, setProfit] = useState(0); // Berechneter Gewinn

  // Konstanten für Stundensätze
  const HOURLY_RATE = 30; // CHF pro Stunde

  // Berechnung der Rentabilität
  const calculateProfit = () => {
    const workCost = (parseFloat(workTime) / 60) * HOURLY_RATE; // Arbeitskosten
    const testCost = (parseFloat(testTime) / 60) * HOURLY_RATE; // Kosten für Testfliegen/Tuning
    const totalCost =
      parseFloat(materialsCost) + workCost + parseFloat(shippingCost) + testCost;
    const calculatedProfit = parseFloat(sellingPrice) - totalCost;
    setProfit(calculatedProfit);
  };

  return (
    <div className="App">
      <h1>Drone Profitability Calculator</h1>
      <div className="calculator">
        <label>
          Verbrauchsmaterial/Werkzeug (CHF):
          <input
            type="number"
            value={materialsCost}
            onChange={(e) => setMaterialsCost(e.target.value)}
          />
        </label>
        <label>
          Arbeitszeit (Minuten):
          <input
            type="number"
            value={workTime}
            onChange={(e) => setWorkTime(e.target.value)}
          />
        </label>
        <label>
          Versandkosten (CHF):
          <input
            type="number"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
          />
        </label>
        <label>
          Testfliegen/Tuning (Minuten):
          <input
            type="number"
            value={testTime}
            onChange={(e) => setTestTime(e.target.value)}
          />
        </label>
        <label>
          Verkaufspreis (CHF):
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </label>
        <button onClick={calculateProfit}>Profit berechnen</button>
        <h
