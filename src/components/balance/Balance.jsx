import React from 'react';

const Balance = ({ transaction }) => {
  const balance = transaction.reduce((acc, txn) => {
    return txn.type === 'credit' ? acc + txn.amount : acc - txn.amount;
  }, 0);

  return (
    <div className="balance-container">
      <h2 className="balance-title">Current Balance</h2>
      <p className="balance-amount">₹ {balance.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
