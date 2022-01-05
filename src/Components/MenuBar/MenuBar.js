import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MenuBar = ({ basketData, toBasket, toProducts, onProducts }) => {
    
    return (
			<>
				<div className="menu-bar">
           <span className="products" onClick={toProducts}>Products</span>
           <FontAwesomeIcon className="basket-icon" icon="shopping-basket" size="2x" onClick={toBasket} />
           {basketData.length > 0 && <span className="item-count" onClick={toBasket}>{basketData.length}</span>}
        </div>
				<div className="sub-menu">
					<span className="sub-menu-item">{onProducts ? 'Products' : 'Your Basket'}</span>
				</div>
			</>
    )
}

export default MenuBar
