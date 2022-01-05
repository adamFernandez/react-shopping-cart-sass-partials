import Items from "../Items/Items";
import Totals from "../Totals/Totals";

const Basket = ({ basketData, handleQuantity, resetQuantities, removeItem, totals}) => {
    return (
        <div className="container">
        <Items basketData={basketData} handleQuantity={handleQuantity} removeItem={removeItem} />
        
        <Totals total={totals} resetQuantities={resetQuantities}/>
      </div>
    )
}

export default Basket
