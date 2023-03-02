function Register() {
    return (
        <div className="form-container">
            <div>
                {/* <button>Customer</button>
                <button>Farmer</button> */}
                <input type="radio" id="customer" name="userGroup" value="Customer" />
                <label for="customer">Customer</label>
                <input type="radio" id="farmer" name="userGroup" value="Farmer" />
                <label for="farmer">Farmer</label>
            </div>
            <form>

            </form>
        </div>
    )
}

export default Register