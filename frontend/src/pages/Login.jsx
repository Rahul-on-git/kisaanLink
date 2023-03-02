import { useState } from "react"

function Login() {
    const  [contact, setContact] = useState('');
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

                <button className="form-btn">Login</button>

            </form>
        </div>
    )
}

export default Login