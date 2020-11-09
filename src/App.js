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
import IsAuthenticated from "./Authentication/IsAuthenticated";

export default function App(props) {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          {/* <Route
            path="/jobs"
            component={(props) => (
              <IsAuthenticated
                WrappedComponent={JobList}
                {...props}
                typeOfUser={"user"}
              />
            )}
          /> */}
          <Route path="/jobs" component={JobList} />
          <Route path="/howitworks" component={Howitworks} />
          <Route path="/usersignup" component={UserSignUp} />
          <Route path="/employer/profile">
            <IsAuthenticated
              WrappedComponent={EmployerProfile}
              typeOfUser={"employer"}
              {...props}
            />
          </Route>
          <Route path="/user/profile">
            <IsAuthenticated
              WrappedComponent={UserProfile}
              typeOfUser={"user"}
              {...props}
            />
          </Route>
          <Route path="/employersignup" component={EmployerSignup} />
          <Route path="/" exact component={Homepage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
