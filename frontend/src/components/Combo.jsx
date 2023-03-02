import itemImage from '../assets/temp.jpg'

function Combo() {
    return (
        <div className="combo">
            <div>Combo Name</div>
            <div><img src={itemImage} alt='stock' className='img-front'/></div>
            <div>Combo Price</div>
        </div>
    );
}

export default Combo