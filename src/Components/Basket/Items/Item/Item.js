import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ item, handleQuantity, removeItem }) => {
    return (  
        <div className="item">
            <img className="item_image" src={item.image} alt={item.title} width="75%" />
            <span className="title">{item.title}</span>
            <input className="number_box"
            type="number"
            value={item.quantity}
            onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
            onChange={(e) => handleQuantity(item, e)} />
            <span className="price"> $ {(item.quantity * item.price).toFixed(2)}</span>      
            <FontAwesomeIcon className='delete' icon="times" size="1x" onClick ={() => removeItem(item.id)} />
        </div>              
    )
}

export default Item;