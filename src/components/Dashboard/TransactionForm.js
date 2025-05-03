// src/components/Dashboard/TransactionForm.jsx
import { useState, useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import Button from '../UI/Button';

export default function TransactionForm() {
  const { addTransaction } = useContext(TransactionContext);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'food',
    type: 'expense'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    setFormData({
      description: '',
      amount: '',
      category: 'food',
      type: 'expense'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div className="form-group">
        <label>Type</label>
        <select 
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <input 
          type="text" 
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Amount</label>
        <input 
          type="number" 
          step="0.01"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Category</label>
        <select 
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="entertainment">Entertainment</option>
          <option value="bills">Bills</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <Button type="submit">Add Transaction</Button>
    </form>
  );
}