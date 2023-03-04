import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';

import imageList from "../assets/individualItemImageList";
import useCartContext from "../hooks/useCartContext";
import useUserContext from "../hooks/useUserContext";

function ShoppingPage() {
    const [products, setProducts] = useState([])
    const [addedToCart, addToCart] = useState(false)
    const {cart, dispatch} = useCartContext()
    const {user} = useUserContext()
    const [queryParameters] = useSearchParams()

    function handleClick(e, product) {
        e.preventDefault();
        if (!cart) {
            dispatch({type: 'SET_CART', payload: {name: product.produceType, quantity: 1, cost: product.produceDesiredPrice}})
        }
        else {
            dispatch({type: 'CREATE_CART', payload: {name: product.produceType, quantity: 1, cost: product.produceDesiredPrice}})
        }
        addToCart(true)
    }

    useEffect(() => {
        async function fetchProducts () {
            const response = await fetch('/buyers/products/', {
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

        async function fetchType (type) {
            const response = await fetch(`/buyers/product/${type}`, {
                method: 'GET'
            })

            const json = await response.json()

            json.forEach((product) => {
                imageList.forEach( (imageL) => {
                    if(imageL[1] === product.produceType.toLowerCase()) {
                        product.image = imageL[0]
                    }
            })})

            
            setProducts(json.filter((el) => { return el.produceType === "Apple" ? false : true}))
        }

        const type = queryParameters.get('type')
        if(!type) {
            fetchProducts()
        } else {
            fetchType(type)
        }
    }, [])


    useEffect(() => { setTimeout(() => {addToCart(false)}, 2000)}, [addedToCart])
    return (
        <>
        {addedToCart && <div className='notification'>Item added to cart</div>} 
        {!user && <div className='notification'>Sign in to shop</div>}
        <div className="container">
            {
            (products.length!==0 && products.map((product) => {
                return(
                    <Link to={`../items/${product._id}`} className='none'>
                        <div className="product">
                            <img src={product.image} alt={product.produceType}/>
                            <h3>{product.produceType}</h3>
                            <p>Available Quantity: {' '} {product.produceQuantity}kgs</p>
                            <p>Price: <span>Rs{' '}{product.produceDesiredPrice}</span></p>
                            <button onClick={(e) => handleClick(e,product)} className="form-btn" disabled={!user}>Add to Cart</button>
                        </div>
                    </Link>
                );
            }))}
        </div>
        </>
    );
}

export default ShoppingPage