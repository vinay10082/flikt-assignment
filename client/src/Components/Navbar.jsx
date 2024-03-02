import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode'

import { setCurrentUser } from '../Actions/CurrentUser.js'

export const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null));
}
useEffect(() => {
    const token = User?.token 
    if(token){
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogout()
        }
    }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
},[
    User?.token, 
    dispatch])

  return (
    <div>Navbar
      { User === null ? 
        <Link to='/Auth'>Log in</Link> : 
        <>
        <button onClick={handleLogout}>Log out</button>
        </>
      }
    </div>
  )
}
