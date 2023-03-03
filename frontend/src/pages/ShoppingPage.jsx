import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import imageList from "../assets/individualItemImageList";

function ShoppingPage() {
    const [products, setProducts] = useState([])

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
                            <button>Add to Cart</button>
                        </div>
                    </Link>
                );
            }))}
        </div>
    );
}

export default ShoppingPage