import Items from './components/Items/Items';
import Totals from './components/Totals/Totals';
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

  const resetQuantities = (e) => {
    e.preventDefault();
    const newData = [...data];
    newData.forEach(i => i.quantity = 0);

    setData(newData);
  }

  const total = data.reduce((a, i) => a + i.price * i.quantity, 0);

  return (
    <form className="form">
      <Items data={data} handleQuantity={handleQuantity} removeItem={removeItem} />
      
      <Totals total={total} resetQuantities={resetQuantities}/>
    </form>
  );
}

export default App;
