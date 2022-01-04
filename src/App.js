import Items from './components/Items/Items';
import './components/FontAwesomeIcons';

import { useState } from 'react';

function App() {
  
  const [data , setData] = useState([
    {
      id: "1",
      name: "Mountain Dew",
      price: 1.80,
      quantity: 0,
    },
    {
      id: "2",
      name: "Desperados",
      price: 2.583,      
      quantity: 0,
    },
    {
      id: "3",
      name: "Jack Daniels",
      price: 3.35,
      quantity: 0,
    }
  ]);
  
  const handleQuantity = (item, e) => {
    const currentItem = data.find(i => i.id === item.id);
    setData(
      data.map(i => i.id === item.id  
        ? {...currentItem, quantity: e.target.value}
        : i
      )
    )
  }

  const removeItem = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  }

  const reset = (e) => {
    e.preventDefault();
  }

  return (
    <form className="form">
      <Items data={data} handleQuantity={handleQuantity} removeItem={removeItem} />
      
      <div className="total-container">
        <span className="total">$ total</span>
        <button className="clear" type="button" onClick={reset}>Clear</button>
        <button className="check-out" type="submit">Check Out &gt;</button>
      </div>
    </form>
  );
}

export default App;
