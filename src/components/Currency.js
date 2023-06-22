import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';


const Currency = () => {
  const {currency, dispatch } = useContext(AppContext);
  const [showOptions,setShowOptions] = useState(false);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_Currency',
                payload: val,
            });
          
    }
     const getCurrencyName = (val) => {
      switch(val){
        case '£' :
          return 'Pound (£)';

        case  '₹' :
          return 'Ruppee (₹)';

        case '€' :
          return 'Euro (€)';
        
        case '$' :
          return 'Dollar ($)'; 

          default:
            return '';
      }
     }
     const handleDropdownClick = () => {
      setShowOptions(!showOptions)
     }

     const handleOptionChange = (event) =>{
      const  selectedCurrency = event.target.value;
      changeCurrency(selectedCurrency);
      setShowOptions(false);
     }

  return (
        <div className=' currency alert alert-success'  style={{ backgroundColor: '#93F3D2' }}> 
              
              <div className= ' currency-dropdown'
                 onMouseEnter={handleDropdownClick}
                 onMouseLeave={() => setShowOptions(false)}
                 style={{cursor : 'pointer'}}>

              {!showOptions && <span>Currency:{getCurrencyName(currency)}</span> } 

             { showOptions ? (
                <>
                <span>Currency</span>
                <br></br>
                <select 
              name="Currency" 
              id="Currency"  
            
              style={{ backgroundColor: '#93F3D2' }} 
              onChange={handleOptionChange}
                >
              <option value="£">£ Pound</option>
              <option value="₹">₹ India</option>
              <option value="€">€ Euro</option>
              <option value="$">$ Dollar</option>
             
      </select>	
     </>
      ) : (
      <span> ▾ </span>
      )}
             
      
    </div>	
          
    </div>
    );
};

export default Currency;