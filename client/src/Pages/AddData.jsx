import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const AddData = () => {

  const datas = {
    fname:"",
    lname:"",
    dob:"",
    email:"",
    phone:""
  }

  const [data, setData] = useState(datas)

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]:value});
    // console.log(dat);
  }

  const submitForm = async(e) => {
    e.preventDefault();

    await axios.post('http://localhost:5000/api/create', data)
    .then((response)=>{
      console.log(response)
    }).catch(error => console.log(error))
  }

  return (
    <div className="addData">
      <Link to={'/'}>Back</Link>
      <h3>Add new Data</h3>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id='fname' name='fname' placeholder='First Name' onChange={inputHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id='lname' name='lname' placeholder='Last Name' onChange={inputHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" id='dob' name='dob' placeholder='dd/mm/yyyy' onChange={inputHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="text" id='email' name='email' placeholder='xyz123@gmail.com' onChange={inputHandler} />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id='phone' name='phone' placeholder='+91-xxxxxxxxxx' onChange={inputHandler} />
        </div>
        <div className="inputGroup">
          <button type="submit">Add Data</button>
        </div>
      </form>
    </div>
  )
}
