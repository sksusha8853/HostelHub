import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, connect } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import { getAuthActions } from '../app/actions/authActions';


const Home = () => {
    const search = useLocation().search;
    const navigate = useNavigate();
    useEffect(() => {
        const userDetails = new URLSearchParams(search);
        console.log('userDetails', userDetails)
        navigate("/");
        // if (userDetails) {
        //     const data = jwt_decode(userDetails).userDetails;
        //     changeData();
        //     setUserDetails(data);
        //     if (data.role === "admin") navigate("/admin/home");
        //     if (data.age) {
        //         navigate("/");
        //         const userId = {
        //             user_id: data?._id,
        //         };
        //         getRecommendedMovies(
        //             userId,
        //             setMoviesList,
        //             setIsLoading,
        //             setCarouselDetails
        //         );
        //     } else {
        //         navigate("/initialDetails");
        //     }
        // } else if (user) {
        //     if (user.role === "admin") navigate("/admin/home");
        //     const userId = {
        //         user_id: user?._id,
        //     };
        //     getRecommendedMovies(
        //         userId,
        //         setMoviesList,
        //         setIsLoading,
        //         setCarouselDetails
        //     );
        // } else {
        //     getHomeMovies(setMoviesList, setIsLoading, setCarouselDetails);
        // }
    }, []);
    return (
        <div>
            <div><Navbar /></div>
            <div>Body</div>
            <div><Footer /></div>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getAuthActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(Home);

