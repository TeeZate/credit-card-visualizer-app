// src/context/TransactionContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import { generateMockTransactions } from '../utils/transactionHelpers';

export const TransactionContext = createContext();

// Create the custom hook that components are trying to import
export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load mock data on initial render
    const mockData = generateMockTransactions();
    setTransactions(mockData);
    
    // Calculate initial balance
    const calculatedBalance = mockData.reduce(
      (total, tx) => total + (tx.type === 'income' ? tx.amount : -tx.amount),
      5000 // Starting balance
    );
    setBalance(calculatedBalance);
    setLoading(false);
  }, []);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    
    setTransactions([newTransaction, ...transactions]);
    
    // Update balance
    setBalance(prev => 
      transaction.type === 'income' 
        ? prev + transaction.amount 
        : prev - transaction.amount
    );
  };

  return (
    <TransactionContext.Provider 
      value={{ transactions, balance, addTransaction, loading }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
