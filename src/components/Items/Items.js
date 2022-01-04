import Item from './Item/Item'

const Items = ({ data, handleChange }) => {
    return (
        <div className="items">
            {data.map(item => 
                <Item key={item.id} item={item} handleChange={handleChange} />
            )}  
        </div>
    )
}

export default Items;