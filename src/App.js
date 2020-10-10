import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navigation from "./Homepage/Navigation";
import UserSignUp from "./Homepage/UserSignup";
import ForEmployers from "./ForEmployersPage/ForEmployerMain";
import JobList from "./JobsMainView/JobsList";
import Map from "./LeafletMap/Map";
import UserProfile from "./UserProfile/UserProfile";
import Footer from "./Footer/Footer";
// import Login from "./Signup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Login /> */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/jobs" component={JobList} />
          <Route path="/usersignup" component={UserSignUp} />
          <Route path="/profile/user" component={UserProfile} />
          {/* <Route path="/profile/company" component={UserProfile} /> */}
          <Route path="/employer" component={ForEmployers} />
          <Route path="/map" component={Map} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
