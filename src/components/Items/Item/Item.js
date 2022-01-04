import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ item, handleQuantity, removeItem }) => {
    return (
        <label className="item">
            {item.name}
            <input className="number-box"
            type="number"
            value={item.quantity}
            onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
            onChange={(e) => handleQuantity(item, e)} />
            <span className="total-price"> $ {(item.quantity * item.price).toFixed(2)}</span>      
            <FontAwesomeIcon className='delete-item' icon="times" size="1x" onClick ={() => removeItem(item.id)} />
        </label>
    )
}

export default Item;