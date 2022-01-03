
function App() {
  const handleChange = () => {

  }

  const reset = (e) => {
    e.preventDefault();
  }

  return (
    <form className="form">
      <label className="item">
        Item 1
        <input className="number-box"
          type="text"
          value="0"
          onChange={handleChange} />
          <span className="total-price"> $ 0.00</span>      
          X
      </label>
      <div className="total-container">
        <span className="total">$ total</span>
        <button className="clear" type="button" onClick={reset}>Clear</button>
        <button className="check-out" type="submit">Check Out &gt;</button>
      </div>
    </form>
  );
}

export default App;
