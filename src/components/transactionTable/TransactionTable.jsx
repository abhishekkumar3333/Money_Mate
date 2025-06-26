import React from 'react';

const TransactionTable = ({ transaction }) => {
  const currentMonthTransaction = transaction.filter((txn) => {
    const txnDate = new Date(txn.date);
    const now = new Date();
    return (
      txnDate.getMonth() === now.getMonth() &&
      txnDate.getFullYear() === now.getFullYear()
    );
  });

  return (
    <div className="table-container">
      <h3 className="table-title">Transaction History (This Month)</h3>
      {currentMonthTransaction.length === 0 ? (
        <p className="no-transaction-msg">No transactions this month.</p>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentMonthTransaction.map((txn) => (
              <tr key={txn.id}>
                <td>{new Date(txn.date).toLocaleString()}</td>
                <td className={`type-cell ${txn.type === 'credit' ? 'credit' : 'debit'}`}>
                  {txn.type}
                </td>
                <td>{txn.descriptions}</td>
                <td>₹ {txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionTable;
