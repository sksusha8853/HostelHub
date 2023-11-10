import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getMainActions } from '../app/actions/mainActions';
import { connect, useSelector } from 'react-redux';

const Announcement = ({ postAnnouncement }) => {
    const [credentials, setcredentials] = useState({ subject: "", description: "" })
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const announcementDetails = {
            email: user.email,
            subject: credentials.subject,
            description: credentials.description
        };

        postAnnouncement(announcementDetails, navigate);
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
        else
            if ((user.role) !== "admin") {
                navigate("/");
            }
            else {
                console.log(user);
            }
    }, [])

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='text' className='form-control' name='email' value={user.email} />
                    </div>


                    <div className='mb-3'>
                        <label htmlFor='subject' className='form-label'>Subject</label>
                        <input type='text' className='form-control' name='subject' value={credentials.subject} onChange={onChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Description</label>
                        <input type='text' className='form-control' name='description' value={credentials.description} onChange={onChange} />
                    </div>

                    <button type="submit" className='m-3 btn btn-success'>Submit</button>
                </form>
            </div>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getMainActions(dispatch),
    };
};
export default connect(null, mapActionsToProps)(Announcement);