import Item from './Item/Item';

const Items = ({ basketData, handleQuantity, removeItem }) => {
    return (
        <div className="items">
            {basketData.length === 0 && <p>Cart is Empty</p>}
            {basketData.map(item => 
                <Item key={item.id} item={item} handleQuantity={handleQuantity} removeItem={removeItem} />
            )}  
        </div>
    )
}

export default Items;