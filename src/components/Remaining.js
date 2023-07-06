import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget ,currency,backgroundColor } = useContext(AppContext);
      
    const totalExpenses = expenses.reduce((total, item) => {
      return (total= total + item.cost);
    }, 0);
   
      
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    

    return (
        <div className={`alert ${alertType}`} style={{backgroundColor}}>
            <span className='m-1'><h6>Remaining : {currency}{budget - totalExpenses}</h6></span>
        </div>
    );
};
export default Remaining;
