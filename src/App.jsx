import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Balance from './components/balance/Balance';
import TransactionForm from './components/transactionform/TransactionForm';
import TransactionTable from './components/transactionTable/TransactionTable';

function App() {
  // ✅ Load from localStorage
  const [transaction, setTransaction] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [showForm, setShowForm] = useState(true);
  const [formType, setFormType] = useState('credit');

  // ✅ Save to localStorage when transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transaction));
  }, [transaction]);

  const handleAddTransaction = (newTransaction) => {
    setTransaction([...transaction, newTransaction]);
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <Balance transaction={transaction} />

      <div className="buttons">
        <button onClick={() => { setFormType('credit'); setShowForm(true); }}>➕ Add Credit</button>
        <button onClick={() => { setFormType('debit'); setShowForm(true); }}>➖ Add Debit</button>
      </div>

      {showForm && (
        <TransactionForm
          type={formType}
          onAddTransaction={handleAddTransaction}
          onClose={() => setShowForm(false)}
        />
      )}

      <TransactionTable transaction={transaction} />
    </>
  );
}

export default App;
