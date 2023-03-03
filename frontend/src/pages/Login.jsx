import { useState } from "react"

function Login() {
    const [userType, setUserType] = useState('buyers');

    const  [contact, setContact] = useState('');
    const  [password, setPassword] = useState('');

    async function handleClick(e) {
        e.preventDefault()
        const objToSend = {}
        objToSend[`${userType.slice(0,-1)}Contact`] = contact
        objToSend[`${userType.slice(0,-1)}Pass`] = password
        console.log(objToSend)
        const response = await fetch(`/${userType}/login`, {
            method: 'post',
            body: JSON.stringify(objToSend),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const json = await response.json();

        if (response.ok) {
            setContact('')
            setPassword('')
            setUserType('buyers')

            console.log(json)
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
                    <label for="contact">Contact Number:</label>
                    <input type='text' name="contact" id="contact" onChange={(e) => {setContact(e.target.value)}}/>
                </div>
                <div className="form-sub">
                    <label for="password">Password:</label>
                    <input type='password' name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <button className="form-btn" onClick={handleClick}>Login</button>

            </form>
        </div>
    )
}

export default Login