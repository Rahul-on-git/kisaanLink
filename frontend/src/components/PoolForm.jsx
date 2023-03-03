import { useState } from "react";

function PoolForm() {
    const  [depLoc, setDepLoc] = useState('');
    const  [freshness, setFreshness] = useState('');
    const  [produceType, setProduceType] = useState('');
    const  [quantity, setQuantity] = useState('');

    return (
        <form className="form-container">
            <h3>Enter details to notify truck driver</h3>
            <div className="form-sub">
                <label htmlFor="depLoc">Enter deposit location:</label>
                <input type='text' name="depLoc" id="depLoc" onChange={(e) => {setDepLoc(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="freshness">How long will the produce stay fresh for:</label>
                <input type='text' name="freshness" id="freshness" onChange={(e) => {setFreshness(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="produceType">What is the produce:</label>
                <input type='text' name="produceType" id="produceType" onChange={(e) => {setProduceType(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="quantity">Quantity of produce:</label>
                <input type='text' name="quantity" id="quantity" onChange={(e) => {setQuantity(e.target.value)}}/>
            </div>

            <button className="form-btn">Send Request</button>
        </form>
    )
}

export default PoolForm;