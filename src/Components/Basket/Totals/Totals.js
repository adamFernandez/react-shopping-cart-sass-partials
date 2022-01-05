import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Totals = ({ total, resetQuantities }) => {
    return (
        <div className="total-container">
            <span className="total">${total.toFixed(2)}</span>
            <button className="clear" type="button" onClick={resetQuantities}>Clear</button>
            <button className="check-out" type="submit">Check Out <FontAwesomeIcon icon="angle-right" size="lg" /></button>
        </div>
    )
}

export default Totals;