import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navigation from "./Homepage/Navigation";
import UserSignUp from "./UserSignup/UserSignup";
import EmployerSignup from "./ForEmployersPage/EmployerSignup";
import JobList from "./JobsMainView/JobsList";
import UserProfile from "./UserProfile/UserProfile";
import Footer from "./Footer/Footer";
import EmployerProfile from "./EmployerProfile/EmployerProfile";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/jobs" component={JobList} />
          <Route path="/usersignup" component={UserSignUp} />
          <Route path="/user/profile" component={UserProfile} />
          <Route path="/employersignup" component={EmployerSignup} />
          <Route path="/employer/profile" component={EmployerProfile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
