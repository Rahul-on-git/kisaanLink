// import itemImage from '../assets/temp.jpg'
import comboList from "../assets/comboList";

function Combo() {
    return (
        <div className="combo">
            <div>Combo Name</div>
            <div><img src={comboList[2]} alt='stock' className='img-front'/></div>
            <div>Combo Price</div>
        </div>
    );
}

export default Combo