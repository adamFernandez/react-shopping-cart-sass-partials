import Item from './Item/Item'

const Items = ({ data, handleQuantity, removeItem }) => {
    return (
        <div className="items">
            {data.map(item => 
                <Item key={item.id} item={item} handleQuantity={handleQuantity} removeItem={removeItem} />
            )}  
        </div>
    )
}

export default Items;