import { useContext } from 'react';
import TransactionForm from '../components/Dashboard/TransactionForm';
import TransactionList from '../components/Dashboard/TransactionList';
import { TransactionContext } from '../context/TransactionContext';
import '../styles/TransactionsPage.css';

export default function TransactionsPage() {
  const { transactions, addTransaction } = useContext(TransactionContext);

  return (
    <div className="transactions-page">
      <h1>Your Transactions</h1>
      <div className="transactions-container">
        <div className="transactions-form">
          <h2>Add New Transaction</h2>
          <TransactionForm onSubmit={addTransaction} />
        </div>
        
        <div className="transactions-list-container">
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
