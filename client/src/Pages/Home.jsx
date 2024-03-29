import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

export const Home = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/getall')
            setDatas(response.data);
        }
        fetchData();
    }, [])

    const deleteData = async (dataId) => {
        await axios.delete(`http://localhost:5000/api/delete/${dataId}`)
            .then((response) => {
                setDatas((prevUser) => prevUser.filter((data) => data._id !== dataId))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="home-data-table">
            <h3>CRUD Table</h3>
            <table>
                <tr>
                    <th>S.no.</th>
                    <th>Full Name</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
                {
                    datas.map((data, index) => {
                        return (
                            <tr key={data._id}>
                                <td>{index + 1}.</td>
                                <td>{data.fname} {data.lname}</td>
                                <td>{data.dob}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <button className='delete-btn' onClick={() => deleteData(data._id)}>Delete</button>
                                    <Link className='handle-switch-btn' to={`/edit/` + data._id}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <Link className='auth-btn ' to={'/add'}>Add Data</Link>
        </div>
    )
}
