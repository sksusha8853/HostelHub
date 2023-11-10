import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getMainActions } from '../app/actions/mainActions';

const ShowAnnouncements = ({ getAllAnnouncements }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);

    useEffect(() => {
        // Replace 'apiEndpoint' with the actual API endpoint provided by your backend
        if (!user) {
            navigate("/login");
        }
        else {
            const userDetails = {
                role: user.role,
                email: user.email
            }
            getAllAnnouncements(userDetails, setData, navigate);
        }
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    return (
        <div>
            <h1>Data from Database</h1>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>
                        {/* Display data fields */}
                        <p>{item.subject}</p>
                        <p>{item.description}</p>
                        {/* Add more fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getMainActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(ShowAnnouncements);