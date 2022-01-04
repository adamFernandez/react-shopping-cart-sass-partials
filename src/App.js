import Items from './components/Items/Items';

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
  
  const handleChange = () => {

  }

  const reset = (e) => {
    e.preventDefault();
  }

  return (
    <form className="form">
      <Items data={data} handleChange={handleChange} />
      
      <div className="total-container">
        <span className="total">$ total</span>
        <button className="clear" type="button" onClick={reset}>Clear</button>
        <button className="check-out" type="submit">Check Out &gt;</button>
      </div>
    </form>
  );
}

export default App;
