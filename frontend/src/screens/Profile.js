import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getAuthActions } from '../app/actions/authActions';

const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [])

    return (
        <>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
         {/* Add the other value at time of making the frontend. It is common for both student and staff profile. */}
        </>
    )
}

export default Profile;