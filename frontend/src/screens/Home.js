import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, connect } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import { getAuthActions, setLoggedIn } from '../app/actions/authActions';
import { getMainActions } from '../app/actions/mainActions';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components';


const Home = ({ setUserDetails, loggedIn, userDetails, setLoggedIn }) => {
    const search = useLocation().search;
    const navigate = useNavigate();
    useEffect(() => {
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
            <div>
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
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

