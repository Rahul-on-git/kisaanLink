import { Link } from 'react-router-dom';
import React from 'react';


function Navbar() {


  return (
    <div className="navbar">
      <Link to="/"><h1>Kisaan Link</h1></Link>
      <nav>
        {(true)
        && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
        )}
        {(true)
        && (
        <>
          {/* <div>{user.email}</div> */}
          {/* <button type="submit" onClick={''}>Logout</button> */}
        </>
        )}
        <Link to="/truck">Truck Management</Link>
        <Link to="/shop">Shop</Link>
        {/* <input type='text' placeholder='Search' className='search-box'/> */}
      </nav>
    </div>
  );
}

export default Navbar;
