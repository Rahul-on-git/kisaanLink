// import stockItemImage from '../assets/onions.jpg'
import imageList from '../assets/individualItemImageList'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function StockItemPage() {
    const [product, setProduct] = useState()
    const {id} = useParams()
    useEffect(() => {
        async function fetchProducts () {
            const response = await fetch(`/buyers/products/${id}`, {
                method: 'GET'
            })

            const json = await response.json()
            imageList.forEach((imageL) => {
                if(imageL[1] === json[0].produceType.toLowerCase()) {
                    json[0].image = imageL[0]
                }
            })
            setProduct(json[0])

            console.log(...json)

        }

        fetchProducts()
    }, [])


    return (
        (product) && (
        <div className="main">
            <div className="row">
                <div className="col">
                    <img src={product.image} id="imagebox" alt={product.produceType} />
                </div>
                <div className="col">
                    <div className="content">
                        <p className="path">Shop/Vegetables</p>
                        <p className="brand">Sold by KisaanLink</p>
                        <h2>{product.produceType}</h2>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <h3>KisaanLink Price</h3>
                        <p className="price">₹ {product.produceDesiredPrice}</p>
                        <p>Quantity: {' '}
                            <select name="quantity">
                            <option value="select quantity">Select quantity</option>
                            <option value="1 kg">1 kg</option>
                            <option value="2 kg">2 kg</option>
                            <option value="3 kg">3 kg</option>
                            </select>
                        </p>
                        <div className='shop-btn-group'>
                            <button type="button">
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                            <button type="button">
                                <i className="fa fa-shopping-cart"></i>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        ) 
    )
}

export default StockItemPage