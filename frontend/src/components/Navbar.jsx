import { Link } from 'react-router-dom';
import React from 'react';
import useUserContext from '../hooks/useUserContext';


function Navbar() {
  const { user, dispatch} = useUserContext()

  function handleClick(e) {
    e.preventDefault()
    dispatch({type: 'LOGOUT'})
    localStorage.removeItem('user')
  }

  return (
    <div className="navbar">
      <Link to="/"><h1>Kisaan Link</h1></Link>
      <nav>
        {(!user)
        && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
        )}
        {(user && (user.type === "Farmer" || user.type === "TruckDriver")) && 
        (<Link to="/truck">Truck Management</Link>)
        }
        <Link to="/shop">Shop</Link>
        {/* <input type='text' placeholder='Search' className='search-box'/> */}

        {(user)
        && (
        <>
          {/* <div>{user.email}</div> */}
          <button type="submit" className="" onClick={handleClick}>Logout</button>
        </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
