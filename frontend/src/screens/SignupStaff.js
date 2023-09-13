import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuthActions } from '../app/actions/authActions'
import { connect, useSelector } from 'react-redux';

const SignupStaff = ({ registerStaff }) => {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", gender: "", role: "", address: "", contactNumber: "" })
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userDetails);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      gender: credentials.gender,
      address: credentials.address,
      contactNumber: credentials.contactNumber,
      role: credentials.role
    };
    registerStaff(userDetails, navigate);

  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  useEffect(() => {
    if (user) {
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
            <label htmlFor='role' className='form-label'>Role</label>
            <input type='text' className='form-control' name='role' value={credentials.role} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='address' className='form-label'>Address</label>
            <input type='text' className='form-control' name='address' value={credentials.address} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='contactNumber' className='form-label'>Contact Number</label>
            <input type='text' className='form-control' name='contactNumber' value={credentials.contactNumber} onChange={onChange} />
          </div>
          <button type="submit" className='m-3 btn btn-success'>Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
        </form>
      </div>
    </>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getAuthActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(SignupStaff);