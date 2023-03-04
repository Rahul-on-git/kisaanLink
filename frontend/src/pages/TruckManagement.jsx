import Truck from "../components/Truck";

function TruckManagement() {
    const trucks = [
        {truckName: 'Truck1', truckLoc: 'Niphad', truckCapacity: 20, truckFilled: 10, curLoc: {lat: 20.0771, long: 74.1094}, destLoc:{lat: 19.0522, loc: 72.9005}},
        {truckName: 'Truck2', truckLoc: 'Pimpalgaon', truckCapacity: 11, truckFilled: 5, curLoc: {lat:20.1654, long:73.9879}, destLoc:{lat: 19.0522, loc: 72.9005}},
        {truckName: 'Truck3', truckLoc: 'Nanded', truckCapacity: 15, truckFilled: 15, curLoc: {lat:19.1383, long: 77.3210}, destLoc:{lat: 19.0522, loc: 72.9005}},
        {truckName: 'Truck4', truckLoc: 'Karsul', truckCapacity: 10, truckFilled: 9, curLoc: {lat:20.1411, long:74.0311}, destLoc:{lat: 19.0522, loc: 72.9005}}
    ]


    return (
        <div className="register-login">
            <h2>Trucks Near You</h2>
            <div className="truck-management">
                {trucks.map((truck) => <Truck truckInfo={truck} key={truck.truckName}/>)}
            </div>
        </div>
    );
}

export default TruckManagement