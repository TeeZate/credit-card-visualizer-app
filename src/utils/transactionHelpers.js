// src/utils/transactionHelpers.js
export const generateMockTransactions = () => {
    const categories = ['food', 'transport', 'shopping', 'entertainment', 'bills', 'other'];
    const types = ['expense', 'income'];
    const descriptions = [
      'Grocery shopping', 'Restaurant', 'Uber ride', 
      'Amazon purchase', 'Movie tickets', 'Salary', 
      'Electricity bill', 'Freelance work'
    ];
    
    const transactions = [];
    
    for (let i = 0; i < 30; i++) {
      const daysAgo = Math.floor(Math.random() * 30);
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      
      transactions.push({
        id: `tx-${i}`,
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        amount: parseFloat((Math.random() * 500 + 10).toFixed(2)),
        category: categories[Math.floor(Math.random() * categories.length)],
        type: types[Math.floor(Math.random() * types.length)],
        date: date.toISOString()
      });
    }
    
    return transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  
  export const groupByCategory = (transactions) => {
    return transactions.reduce((acc, tx) => {
      acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
      return acc;
    }, {});
  };
  
  export const filterByDateRange = (transactions, days) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    return transactions.filter(tx => new Date(tx.date) >= cutoffDate);
  };