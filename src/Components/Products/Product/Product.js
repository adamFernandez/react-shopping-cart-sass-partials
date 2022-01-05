import React from 'react'

const Product = ({ product, addToBasket, toBasket }) => {
    return (
			<div className="container">
				<div className="product">
					<div className="image">
						<img src={product.image} alt={product.title} width="100%" />
					</div>
					<div className="description">
						<span className="title">{product.title}</span>
						{/* <p>{//product.description}</p> */}
						<div className="buttons">
							<button className="productButton" type="button" onClick={() => addToBasket(product)}>Add to Basket</button>
							<button className="productButton" type="button" onClick={toBasket}>View Basket</button>
						</div>
					</div>					
				</div>    
			</div>
    )
}

export default Product
