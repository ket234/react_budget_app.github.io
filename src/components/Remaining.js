import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget ,currency } = useContext(AppContext);
      
    const totalExpenses = expenses.reduce((total, item) => {
      return (total= total + item.cost);
    }, 0);
   
      
    const alertType = totalExpenses > budget ? 'alert-danger' : 'rgb(239 235 231)';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
