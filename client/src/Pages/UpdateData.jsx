import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Pages.css'

export const UpdateData = () => {

  const datas = {
    fname: "",
    lname: "",
    dob: "",
    email: "",
    phone: ""
  }

  const { id } = useParams();
  const [data, setData] = useState(datas);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data)
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/getone/${id}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/update/${id}`, data)
      .then((response) => {
        console.log(response)
        navigate('/')
      }).catch(error => console.log(error))
  }

  return (
    <div className="updateData">
      <Link className='handle-switch-btn' to={'/'}>Back</Link>
      <h3>Update Data</h3>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" value={data.fname} id='fname' name='fname' placeholder='First Name' onChange={inputChangeHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" value={data.lname} id='lname' name='lname' placeholder='Last Name' onChange={inputChangeHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" value={data.dob} id='dob' name='dob' placeholder='dd/mm/yyyy' onChange={inputChangeHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="text" value={data.email} id='email' name='email' placeholder='xyz123@gmail.com' onChange={inputChangeHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" value={data.phone} id='phone' name='phone' placeholder='+91-xxxxxxxxxx' onChange={inputChangeHandler} />
        </div>
        <div className="inputGroup">
          <button className="auth-btn" type="submit">Update Data</button>
        </div>
      </form>
    </div>
  )
}
