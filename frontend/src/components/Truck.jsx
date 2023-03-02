import { Link } from "react-router-dom";

function Truck({truckInfo}) {

    const {truckName, truckLoc, truckCapacity, truckFilled} = truckInfo

    function getColor(value) {
        //value from 0 to 1
        var hue = ((1 - value) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    }
    const curColor = getColor(truckFilled/truckCapacity)
    return (
        <Link to={`/truck/${truckName}`} className="none">
            <div className="truck">
                <div>Truck Name: {truckName}</div>
                <div>Current Location: {truckLoc}</div>
                <div>Capacity: {truckCapacity} ton</div>
                <div style={{backgroundColor: `${curColor}`}}>Amount Filled: {truckFilled} ton</div>
            </div>
        </Link>
    );
}

export default Truck