

const Item = ({ item, handleChange}) => {
    return (
        <label className="item">
            {item.name}
            <input className="number-box"
            type="text"
            value="0"
            onChange={handleChange} />
            <span className="total-price"> $ {item.price}</span>      
            X
        </label>
    )
}

export default Item;