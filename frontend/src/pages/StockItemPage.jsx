import stockItemImage from '../assets/onions.jpg'

function StockItemPage() {
    return (
        <div className="main">
        <div className="row">
        <div className="col">
            <img src={stockItemImage} id="imagebox" alt="onions" />
        </div>
        <div className="col">
            <div className="content">
            <p className="path">Shop/Vegetables</p>
            <p className="brand">Sold by KisaanLink</p>
            <h2>Onions</h2>
            <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
            </div>
            <h3>KisaanLink Price</h3>
            <p className="price">₹ 59</p>
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
        <div className="desc">
        <h2>Description</h2>
        <hr />
        <div className="row">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque odio, nostrum molestias aut repellendus ad, veniam molestiae culpa id quas, odit blanditiis mollitia maxime totam quisquam non enim consequuntur cumque officiis libero illo perspiciatis assumenda accusantium? Provident molestiae laborum nobis, itaque quas ipsum saepe voluptatibus, veritatis quam maiores, incidunt impedit.</p>
        </div>
        </div>
    </div>
    )
}

export default StockItemPage