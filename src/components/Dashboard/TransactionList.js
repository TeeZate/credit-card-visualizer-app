import React from 'react';
import '../../styles/TransactionList.css';

export default function TransactionList({ transactions }) {
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="empty-transactions">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3>No transactions yet</h3>
        <p>Add your first transaction to start tracking your finances.</p>
      </div>
    );
  }

  return (
    <div className="transactions-list">
      <h2>Transaction History</h2>
      <div className="transaction-items-container">
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-description">{transaction.description}</div>
              <div className={`transaction-category ${transaction.category}`}>
                {transaction.category.charAt(0).toUpperCase() + transaction.category.slice(1)}
              </div>
            </div>
            <div className={`transaction-amount ${transaction.type}`}>
              {transaction.type === 'expense' ? '- ' : '+ '}
              {formatCurrency(Math.abs(transaction.amount))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
