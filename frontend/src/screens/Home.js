import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, connect } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import { getAuthActions, setLoggedIn } from '../app/actions/authActions';
import { getMainActions } from '../app/actions/mainActions';
import Carousel from 'react-bootstrap/Carousel';
import { Box } from "@mui/material";
// import Abhinandan from "./images/abhinandan.jpg";

const Home = ({ setUserDetails, loggedIn, userDetails, setLoggedIn }) => {
    const search = useLocation().search;
    const navigate = useNavigate();
    useEffect( () => {
        const authToken = new URLSearchParams(search).get("user");
        if (authToken) {
            setUserDetails(authToken);
            setLoggedIn(true);
            navigate("/");
        }
    }, []);

    return (
        <div>
            <Navbar />
            <Box>
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            style={{ maxHeight: '600px', backgroundSize: "cover" }}
                            src={process.env.PUBLIC_URL + '/images/IITIndore.png'}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: "#2E5984" }}>IIT Indore</h1>
                            <hr style={{ border: '4px solid white', width: "700px", margin: 'auto' }} />
                            <h4 style={{ color: "white" }}>Welcome to the Portal of Hall of Residences</h4>
                            <p style={{ color: "white" }}>A one place solution to anything related to Hall of Residences, whether its <br /> payment of accomodation charges, or query redresal, etc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            style={{ maxHeight: '600px', backgroundSize: "cover" }}
                            src={process.env.PUBLIC_URL + '/images/CampusTop.jpg'}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: "#2E5984" }}>IIT Indore</h1>
                            <hr style={{ border: '4px solid white', width: "700px", margin: 'auto' }} />
                            <h4 style={{ color: "white" }}>Welcome to the Portal of Hall of Residences</h4>
                            <p style={{ color: "white" }}>A one place solution to anything related to Hall of Residences, whether its <br /> payment of accomodation charges, or query redresal, etc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            style={{ maxHeight: '600px' }}
                            src={process.env.PUBLIC_URL + '/images/hostels.png'}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: "#2E5984" }}>IIT Indore</h1>
                            <hr style={{ border: '4px solid white', width: "700px", margin: 'auto' }} />
                            <h4 style={{ color: "white" }}>Welcome to the Portal of Hall of Residences</h4>
                            <p style={{ color: "white" }}>A one place solution to anything related to Hall of Residences, whether its <br /> payment of accomodation charges, or query redresal, etc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            style={{ maxHeight: '600px' }}
                            src={process.env.PUBLIC_URL + '/images/auditorium.jpg'}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: "#2E5984" }}>IIT Indore</h1>
                            <hr style={{ border: '4px solid white', width: "700px", margin: 'auto' }} />
                            <h4 style={{ color: "white" }}>Welcome to the Portal of Hall of Residences</h4>
                            <p style={{ color: "white" }}>A one place solution to anything related to Hall of Residences, whether its <br /> payment of accomodation charges, or query redresal, etc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Box>
            <div><Footer /></div>
        </div>
    )
}

const mapStoreStateToProps = ({ auth }) => {
    // console.log('auth in mapStoreStateToProps', auth);
    return {
        loggedIn: auth.loggedIn,
        userDetails: auth.userDetails,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getAuthActions(dispatch),
        ...getMainActions(dispatch),
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Home);

