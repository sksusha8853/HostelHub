import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignupStudent() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", gender: "", address: "", contactNumber: "", hostel: "", flatNumber: "", roomNumber: "" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createstudent", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, gender: credentials.gender, address: credentials.address, contactNumber: credentials.contactNumber, hostel: credentials.hostel, flatNumber: credentials.flatNumber, roomNumber: credentials.roomNumber })
    });
    const json = await response.json()
    console.log(json)

    if (!json.success) {
      alert("Enter Valid credentials")
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [])

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email address</label>
            <input type='text' className='form-control' name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' name='password' value={credentials.password} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='gender' className='form-label'>Gender</label>
            <input type='text' className='form-control' name='gender' value={credentials.gender} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='address' className='form-label'>Address</label>
            <input type='text' className='form-control' name='address' value={credentials.address} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='contactNumber' className='form-label'>Contact Number</label>
            <input type='text' className='form-control' name='contactNumber' value={credentials.contactNumber} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='hostel' className='form-label'>Hostel</label>
            <input type='text' className='form-control' name='hostel' value={credentials.hostel} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='flatNumber' className='form-label'>Flat Number</label>
            <input type='text' className='form-control' name='flatNumber' value={credentials.flatNumber} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='roomNumber' className='form-label'>Room Number</label>
            <input type='text' className='form-control' name='roomNumber' value={credentials.roomNumber} onChange={onChange} />
          </div>
          <button type="submit" className='m-3 btn btn-success'>Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
        </form>
      </div>
    </>
  )
}
