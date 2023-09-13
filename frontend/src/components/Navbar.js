import React from 'react'
import { useSelector, connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAuthActions } from '../app/actions/authActions';

const Navbar = ({setUserDetails}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);
    const handleLogout = () => {
        setUserDetails(null);
        navigate("/");
    }
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
                <div className='container-fluid'>
                    <Link className='navbar-brand fs-1 fst-italic' to="/">HostelHub</Link>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link' aria-current="page" to="/">Home</Link>
                            </li>
                            {(!user) ?
                                <div>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/signupstudent">SignupStudent</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/signupstaff">SignupStaff</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/login">Login</Link>
                                    </li>
                                </div> :
                                <div>
                                    <div className='btn' onClick={handleLogout}>Logout</div>
                                </div>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
      ...getAuthActions(dispatch),
    };
  };
  
  export default connect(null, mapActionsToProps)(Navbar);
