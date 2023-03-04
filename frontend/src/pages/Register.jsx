import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Register() {
    const [userType, setUserType] = useState('buyers');

    const  [username, setUsername] = useState('');
    const  [contact, setContact] = useState('');
    const  [location, setLocation] = useState('');
    const  [password, setPassword] = useState('');
    const  [error, setError] = useState('');
    const navigate = useNavigate();


    async function handleClick(e) {
        e.preventDefault()
        const objToSend = {}
        objToSend[`${userType.slice(0,-1)}Name`] = username
        objToSend[`${userType.slice(0,-1)}Contact`] = contact
        objToSend[`${userType.slice(0,-1)}Location`] = location
        objToSend[`${userType.slice(0,-1)}Pass`] = password
        console.log(objToSend)
        const response = await fetch(`/${userType}/signup`, {
            method: 'post',
            body: JSON.stringify(objToSend),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const json = await response.json();

        if (response.ok) {
            setUsername('')
            setContact('')
            setLocation('')
            setPassword('')
            setUserType('buyers')
            setError('')
            navigate('/')
        } else {
            setError(json)
        }

    }

    function handleUserType(e) {
        setUserType(e.target.id)
        // console.log()
    }

    return (
        <div className="register-login">
            <fieldset className="radio-buttons">
                {/* <button>Customer</button>
                <button>Farmer</button> */}
                <legend>Select user type: </legend>
                <div>
                    <input type="radio" id="buyers" name="userGroup" value="Customer" defaultChecked={"checked"} onClick={handleUserType}/>
                    <label for="buyers">Customer</label>
                </div>
                <div>
                    <input type="radio" id="farmers" name="userGroup" value="Farmer" onClick={handleUserType}/>
                    <label for="farmers">Farmer</label>
                </div>
                <div>
                    <input type="radio" id="truckDrivers" name="userGroup" value="TruckDriver" onClick={handleUserType}/>
                    <label for="truckDrivers">Truck Driver</label>
                </div>
            </fieldset>
            <form className="form-container">
                <div className="form-sub">
                    <label for="username">Name:</label>
                    <input type='text' name="username" id="username" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="form-sub">
                    <label for="contact">Contact Number:</label>
                    <input type='text' name="contact" id="contact" onChange={(e) => {setContact(e.target.value)}}/>
                </div>
                <div className="form-sub">
                    <label for="location">Location:</label>
                    <input type='text' name="location" id="location" onChange={(e) => {setLocation(e.target.value)}}/>
                </div>
                <div className="form-sub">
                    <label for="password">Password:</label>
                    <input type='password' name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <button className="form-btn" onClick={handleClick}>Register</button>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Register