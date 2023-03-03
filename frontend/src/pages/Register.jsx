import { useState } from "react"

function Register() {
    const  [username, setUsername] = useState('');
    const  [contact, setContact] = useState('');
    const  [location, setLocation] = useState('');
    const  [password, setPassword] = useState('');


    return (
        <div className="register-login">
            <fieldset className="radio-buttons">
                {/* <button>Customer</button>
                <button>Farmer</button> */}
                <legend>Select user type: </legend>
                <div>
                    <input type="radio" id="customer" name="userGroup" value="Customer" checked/>
                    <label for="customer">Customer</label>
                </div>
                <div>
                    <input type="radio" id="farmer" name="userGroup" value="Farmer" />
                    <label for="farmer">Farmer</label>
                </div>
                <div>
                    <input type="radio" id="truckDriver" name="userGroup" value="TuckDriver" />
                    <label for="truckDriver">Truck Driver</label>
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

                <button className="form-btn">Register</button>
            </form>
        </div>
    )
}

export default Register