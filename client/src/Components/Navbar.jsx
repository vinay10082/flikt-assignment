import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode'

import { setCurrentUser } from '../Actions/CurrentUser.js'
import logo from '../Assets/logo.png'
import './Components.css'

export const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(setCurrentUser(null));
  }
  useEffect(() => {
    const token = User?.token
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [
    User?.token,
    dispatch])

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div className="nav-links">

          {User === null ?
            <Link class="nav-button" to='/Auth'>Log in</Link> :
            <>
              <button class="nav-button" onClick={handleLogout}>Log out</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}
