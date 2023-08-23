import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Home from './screens/Home';
import SignupStudent from './screens/SignupStudent';
import SignupStaff from './screens/SignupStaff';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/login" element = {<Login/>}/>
          <Route exact path = "/signupstudent" element = {<SignupStudent/>}/>
          <Route exact path = "/signupstaff" element = {<SignupStaff/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
