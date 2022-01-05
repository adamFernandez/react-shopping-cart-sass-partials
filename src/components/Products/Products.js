import Product from './Product/Product';

import { useState, useEffect } from 'react';


const Products = ({addToBasket, toBasket }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProductsData(result.filter(items => items.category === "electronics"));
					
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="container"><h3 className="centered">Loading...</h3></div>;
  } else {
    return (
			<>
				{productsData.map(product =>
					<Product product={product} key={product.id} addToBasket={addToBasket} toBasket={toBasket} />        
					
				)}  
      </>    
    );
  }       
}

export default Products
