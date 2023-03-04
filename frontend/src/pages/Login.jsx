import { useState } from "react"
import useUserContext from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { user, dispatch } = useUserContext()
    const [userType, setUserType] = useState('buyers');
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate();

    const  [contact, setContact] = useState('');
    const  [password, setPassword] = useState('');

    async function handleClick(e) {
        e.preventDefault()
        const objToSend = {}
        objToSend[`${userType.slice(0,-1)}Contact`] = contact
        objToSend[`${userType.slice(0,-1)}Pass`] = password
        console.log(objToSend)
        setLoading(true)
        const response = await fetch(`/${userType}/login`, {
            method: 'post',
            body: JSON.stringify(objToSend),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const json = await response.json();
        setLoading(false)
        if (response.ok) {
            setContact('')
            setPassword('')
            setUserType('buyers')
            dispatch({ type: 'LOGIN', payload: json });
            localStorage.setItem('user', JSON.stringify(json));
            console.log(json)
            navigate('/')
        }
    }

    function handleUserType(e) {
        setUserType(e.target.id)
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
                
                <button className="form-btn" onClick={handleClick} disabled={isLoading}>Login</button>
                {isLoading && <div>Login in progress</div>}
            </form>
        </div>
    )
}

export default Login