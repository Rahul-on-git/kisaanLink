import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function PoolForm() {
    const [depLoc, setDepLoc] = useState('');
    const [freshness, setFreshness] = useState('');
    const [produceType, setProduceType] = useState('');
    const [produceCategory, setProduceCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault()
        console.log({
            produceCategory,
            produceType,
            produceQuantity: quantity,
            producePerishability: freshness,
            produceDesiredPrice: price
        })
        const response = await fetch('/farmers/takeProduceDetails', {
            method: 'POST',
            body: JSON.stringify({
                produceCategory,
                produceType,
                produceQuantity: quantity,
                producePerishability: freshness,
                produceDesiredPrice: price
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            navigate('/')
        }
    }

    return (
        <form className="form-container">
            <h3>Enter details to notify truck driver</h3>
            <div className="form-sub">
                <label htmlFor="depLoc">Enter deposit location</label>
                <input type='text' name="depLoc" id="depLoc" onChange={(e) => {setDepLoc(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="freshness">How long will the produce stay fresh for</label>
                <input type='text' name="freshness" id="freshness" onChange={(e) => {setFreshness(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="produceType">What is the produce</label>
                <input type='text' name="produceType" id="produceType" onChange={(e) => {setProduceType(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="produceCategory">What is the produce category</label>
                <input type='text' name="produceCategory" id="produceCategory" onChange={(e) => {setProduceCategory(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="quantity">Quantity of produce in kgs</label>
                <input type='text' name="quantity" id="quantity" onChange={(e) => {setQuantity(e.target.value)}}/>
            </div>
            <div className="form-sub">
                <label htmlFor="price">Desired price of produce in kgs</label>
                <input type='text' name="price" id="price" onChange={(e) => {setPrice(e.target.value)}}/>
            </div>

            <button className="form-btn" onClick={handleClick}>Send Request</button>
        </form>
    )
}

export default PoolForm;