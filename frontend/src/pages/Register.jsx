function Register() {
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
                    <label for="username">Username:</label>
                    <input type='text' name="username" id="username" />
                </div>
                <div className="form-sub">
                    <label for="contact">Contact:</label>
                    <input type='text' name="contact" id="contact" />
                </div>
                <div className="form-sub">
                    <label for="location">Location:</label>
                    <input type='text' name="location" id="location" />
                </div>
                <div className="form-sub">
                    <label for="password">Password:</label>
                    <input type='password' name="password" id="password" />
                </div>
            </form>
        </div>
    )
}

export default Register