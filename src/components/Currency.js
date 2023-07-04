import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../custom-style.css';


const Currency = () => {
  const {currency, dispatch } = useContext(AppContext);
  const [selectedItem ,setSelectedItem] = useState();
  const [isDropdownOpen , setIsDropdownOpen] = useState(false);
    // const [showOptions,setShowOptions] = useState(false);
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
    //  const handleDropdownClick = () => {
    //   setShowOptions(!showOptions)
    //  }

   
        const handleItemClick= (eventKey) => {
              setSelectedItem(eventKey);
              setIsDropdownOpen(false);
              const  selectedCurrency = eventKey;
              changeCurrency(selectedCurrency);
              
        };


        const handleDropdownToggle = (isOpen) =>{
            setIsDropdownOpen(isOpen)
        };

  return (
    <>
        
        {/* // <div className=' currency alert alert-success'  style={{ backgroundColor: '#93F3D2' }}> 
         */}
              
              {/* <div className= ' currency-dropdown'
                 onMouseEnter={handleDropdownClick}
                 onMouseLeave={() => setShowOptions(false)}
                 style={{cursor : 'pointer'}}> */}

              {/* {!showOptions && <span>Currency:{getCurrencyName(currency)}</span> } 

             { showOptions ? (
                <>
                <span>Currency</span>
                <br></br> */}
                {/* <select 
              name="Currency" 
              id="Currency"  
            
              style={{ backgroundColor: '#93F3D2' }} 
              onChange={handleOptionChange}
                >
              <option value="£">£ Pound</option>
              <option value="₹">₹ India</option>
              <option value="€">€ Euro</option>
              <option value="$">$ Dollar</option>
             
      </select>	 */}

      {/* // ) : (
      // <span> ▾ </span>
      // )} */}
             
      
    {/* // </div>	 */}
          
    {/* // </div> */}

    <div className='currency-container '>
            <Dropdown 
              onSelect={handleItemClick} 
              onToggle={handleDropdownToggle} 
              className="custom-toggle"
              style={{backgroundColor: 'green', height: '56px', width:'100%',borderRadius:'8px'}}>

              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: '#7fe0c2', height: '56px', width:'100%',borderRadius:'8px'}} >
                  <label className="mb-0">Currency:</label>
                    <span className="ml-2">{getCurrencyName(currency)}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{backgroundColor: '#7fe0c2', width:'100%',borderRadius:'8px'}} >
                      <Dropdown.Item eventKey="₹">₹ India</Dropdown.Item>
                      <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
                      <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
                      <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
    </div>
    </>
    
    );
};

export default Currency;

