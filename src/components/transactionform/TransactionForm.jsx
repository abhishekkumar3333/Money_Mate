import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction, onClose, type }) => {
  const [amount, setAmount] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !descriptions) {
      alert('Please fill all fields');
      return;
    }

    const newTransaction = {
      id: new Date().toISOString(),
      type: type,
      amount: parseFloat(amount),
      descriptions,
      date,
    };

    onAddTransaction(newTransaction);
    setAmount('');
    setDescriptions('');
    setDate(new Date().toISOString().slice(0, 16));
    onClose();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Add {type} Transaction</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="form-input"
      />

      <input
        type="text"
        value={descriptions}
        onChange={(e) => setDescriptions(e.target.value)}
        placeholder="Description"
        className="form-input"
      />

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
      />

      <div className="form-actions">
        <button type="submit" className="btn submit-btn">Add Transaction</button>
        <button type="button" onClick={onClose} className="btn cancel-btn">Cancel</button>
      </div>
    </form>
  );
};

export default TransactionForm;
