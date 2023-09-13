import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getAuthActions } from '../app/actions/authActions';

const Login = ({login}) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userDetails);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      email: credentials.email,
      password: credentials.password,
    };
    login(userDetails, navigate);

  //   const json = useSelector((state) => state.user);
  //   console.log(json)

  //   if (!json.success) {
  //     alert("Enter Valid credentials")
  //   }
  //   else {
  //     localStorage.setItem("authToken", json.authToken)
  //     navigate("/");
  //   }
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
            <label htmlFor='email' className='form-label'>Email address</label>
            <input type='text' className='form-control' name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' name='password' value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className='m-3 btn btn-success'>Submit</button>
          <Link to="/signupstudent" className='m-3 btn btn-danger'>I'm a new user</Link>
        </form>
      </div>
    </>
  )
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAuthActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Login);