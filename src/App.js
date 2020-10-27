import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navigation from "./NavigationBar/Navigation";
import UserSignUp from "./UserSignup/UserSignup";
import EmployerSignup from "./ForEmployersPage/EmployerSignup";
import JobList from "./JobsMainView/JobsList";
import UserProfile from "./UserProfile/UserProfile";
import Footer from "./Footer/Footer";
import EmployerProfile from "./EmployerProfile/EmployerProfile";
import Howitworks from "./HowDoesItwork/HowDoesItWork";
import GeoMap from "./LeafletMap/MapGeoTest";
import IsAuthenticated from "./HOC-CheckLoginUser&Employers/IsAuthenticated";

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/jobs" component={JobList} />
          <Route path="/howitworks" component={Howitworks} />
          <Route path="/usersignup" component={UserSignUp} />
          <Route path="/user/profile">
            {IsAuthenticated(<UserProfile />, "user")}
          </Route>
          <Route path="/employer/profile">
            {IsAuthenticated(<EmployerProfile />, "employer")}
          </Route>
          <Route path="/employersignup" component={EmployerSignup} />
          <Route path="/geomap" component={GeoMap} />
          <Route path="/" exact component={Homepage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
