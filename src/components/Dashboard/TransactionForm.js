// src/components/Dashboard/TransactionForm.jsx
import { useState, useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import Button from '../UI/Button';
import '../../styles/TransactionForm.css';

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

  const handleTypeChange = (type) => {
    setFormData({...formData, type});
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div className="type-selector">
        <div 
          className={`type-option ${formData.type === 'expense' ? 'active expense' : ''}`}
          onClick={() => handleTypeChange('expense')}
        >
          Expense
        </div>
        <div 
          className={`type-option ${formData.type === 'income' ? 'active income' : ''}`}
          onClick={() => handleTypeChange('income')}
        >
          Income
        </div>
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <input 
          type="text" 
          placeholder="What was this transaction for?"
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
          placeholder="0.00"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group category-select">
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
