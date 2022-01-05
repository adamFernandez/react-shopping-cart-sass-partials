import Products from './components/Products/Products';
import Basket from './components/Basket/Basket';
import MenuBar from './components/MenuBar/MenuBar';
import './components/FontAwesomeIcons';

import { useState } from 'react';

function App() {
  // PAGES HOOKS
  const [onBasket, setOnBasket] = useState(false);
  const [onProducts, setOnProducts] = useState(true);
  // BASKET
  const [basketData , setBasketData] = useState([]);
  
  // On quantity modification
  const handleQuantity = (item, e) => {    
    const currentItem = basketData.find(i => i.id === item.id);
    setBasketData(
      basketData.map(i => i.id === item.id  
        ? {...currentItem, quantity: e.target.value}
        : i
      )
    )
  }

  // Remove individual item on X press
  const removeItem = (id) => {
    const newData = basketData.filter(item => item.id !== id);
    setBasketData(newData);
  }

  // Reset quantities to 0 on Clear press
  const resetQuantities = (e) => {
    e.preventDefault();
    const newData = [...basketData];
    newData.forEach(i => i.quantity = 0);

    setBasketData(newData);
  }

  // Add product to page
  const addToBasket = (product) => {
    const exist = basketData.find(item => item.id === product.id);
    product.quantity = 1
    exist  
      ? setBasketData(basketData.map(item => item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item))
      : setBasketData([...basketData, product])

		
	}

  const toBasket = (e) => {
    e.preventDefault();
    setOnBasket(true);
    setOnProducts(false);
  }

  const toProducts = (e) => {
    e.preventDefault();
    setOnProducts(true);
    setOnBasket(false);
  }

  const totals = basketData.reduce((a, i) => a + i.price * i.quantity, 0);

  return (
    <>
      <MenuBar basketData={basketData} toBasket={toBasket} toProducts={toProducts} onProducts={onProducts} />
      {onBasket && <Basket basketData={basketData} handleQuantity={handleQuantity} resetQuantities={resetQuantities} removeItem={removeItem} totals={totals}/>}
      {onProducts && <Products addToBasket={addToBasket} toBasket={toBasket}/>}
      
    </>    
  );
}

export default App;
