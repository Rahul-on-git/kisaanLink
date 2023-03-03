import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
function ShoppingPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts () {
            const response = await fetch('/buyers/products', {
                method: 'GET'
            })

            const json = await response.json()

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
                        <img src="https://via.placeholder.com/300x200.png?text=Product+1" alt="Product 1"/>
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