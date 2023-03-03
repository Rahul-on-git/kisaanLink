import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import imageList from "../assets/individualItemImageList";
import useCartContext from "../hooks/useCartContext";

function ShoppingPage() {
    const [products, setProducts] = useState([])
    const {cart, dispatch} = useCartContext()

    function handleClick(e, product) {
        e.preventDefault();
        if (!cart) {
            dispatch({type: 'SET_CART', payload: {name: product.produceType, quantity: 1, cost: product.produceDesiredPrice}})
        }
        else {
            dispatch({type: 'CREATE_CART', payload: {name: product.produceType, quantity: 1, cost: product.produceDesiredPrice}})
        }

        console.log(cart)

    }

    useEffect(() => {
        async function fetchProducts () {
            const response = await fetch('/buyers/products', {
                method: 'GET'
            })

            const json = await response.json()

            json.forEach((product) => {
                imageList.forEach( (imageL) => {
                    if(imageL[1] === product.produceType.toLowerCase()) {
                        product.image = imageL[0]
                    }
            })})

            setProducts(json)
        }

        fetchProducts()
    }, [])
    return (
        <div className="container">{
            (products.length!==0 && products.map((product) => {
                return(
                    <Link to={`../items/${product._id}`} className='none'>
                        <div className="product">
                            <img src={product.image} alt={product.produceType}/>
                            <h3>{product.produceType}</h3>
                            <p>Available Quantity: {' '} {product.produceQuantity}kgs</p>
                            <p>Price: <span>Rs{' '}{product.produceDesiredPrice}</span></p>
                            <button onClick={(e) => handleClick(e,product)}>Add to Cart</button>
                        </div>
                    </Link>
                );
            }))}
        </div>
    );
}

export default ShoppingPage