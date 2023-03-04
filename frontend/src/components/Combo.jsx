// import itemImage from '../assets/temp.jpg'
import comboList from "../assets/comboList";

function Combo({combo}) {
    return (
        <div className="combo">
            <div style={{wordWrap: 'break-word', width: '200px', height: '50px'}}>{combo.comboName}</div>
            <div><img src={comboList[2]} alt='stock' className='img-front'/></div>
            <div>Rs {combo.comboPrice}</div>
        </div>
    );
}

export default Combo