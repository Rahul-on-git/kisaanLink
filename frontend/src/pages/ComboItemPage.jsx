// import stockItemImage from '../assets/onions.jpg'
import imageList from '../assets/individualItemImageList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCartContext from '../hooks/useCartContext'

function ComboItemPage() {
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1)
    const [addedToCart, addToCart] = useState(false)
    const { id } = useParams()

    const { cart, dispatch } = useCartContext()

    function handleClick(e) {
        e.preventDefault();
        if (!cart) {
            dispatch({type: 'SET_CART', payload: {name: product.produceType, quantity: quantity, cost: product.produceDesiredPrice}})
        }
        else {
            dispatch({type: 'CREATE_CART', payload: {name: product.produceType, quantity: quantity, cost: product.produceDesiredPrice}})
        }

        // console.log(cart)
        addToCart(true)

    }

    useEffect(() => {
        async function fetchProducts () {
            const response = await fetch(`/buyers/comboSingle/${id}`, {
                method: 'GET'
            })

            const json = await response.json()
            let names = json[0].comboName.split(',')
            console.log(names)
            names = names.map((name) => name.trim())
            json[0].images = []
            names.forEach((name) => {imageList.forEach((imageL) => {
                if(imageL[1] === name.toLowerCase()) {
                    json[0].images.push(imageL[0])
                }
            })})
            setProduct(json[0])
            console.log(json[0])
        }

        fetchProducts()
    }, [])

    useEffect(() => { setTimeout(() => {addToCart(false)}, 2000)}, [addedToCart])


    return (
        (product) && (
        <>
        {addedToCart && <div className='notification'>Item added to cart</div>} 
        <div className="main">
            <div className="row">
                <div className="col">
                    <div className='comboImages'>
                        {product.images.map((image) => <img src={image} class="comboImage" alt={product.produceType} />)}
                    </div>
                </div>
                <div className="col">
                    <div className="content">
                        <p className="path">Shop/Combos</p>
                        <p className="brand">Sold by KisaanLink</p>
                        <h2>{product.comboName}</h2>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <h3>KisaanLink Price</h3>
                        <p className="price">₹ {product.comboPrice}</p>
                        <p>Quantity: {' '}
                            <select name="quantity" onChange={(e) => {setQuantity(e.target.value); console.log('here')}}>
                            <option value="select quantity" >Select quantity</option>
                            <option value="1">1 kg</option>
                            <option value="2">2 kg</option>
                            <option value="3">3 kg</option>
                            </select>
                        </p>
                        <div className='shop-btn-group'>
                            <button type="button" onClick={handleClick}>
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
        ) 
    )
}

export default ComboItemPage