import Truck from "../components/Truck";

function TruckManagement() {
    const trucks = [{truckName: 'Truck1', truckLoc: 'Niphad', truckCapacity: 20, truckFilled: 10},
              {truckName: 'Truck2', truckLoc: 'Pimpalgaon', truckCapacity: 11, truckFilled: 5},
              {truckName: 'Truck3', truckLoc: 'Lasalgaon', truckCapacity: 15, truckFilled: 15},
              {truckName: 'Truck4', truckLoc: 'Karsul', truckCapacity: 10, truckFilled: 9}]


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