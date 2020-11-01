import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import Login from "./UserLogin";
import "./NavigationBar.css";

export default function Navigation() {
  const location = useLocation();
  console.log(location);
  // need to connect the useState to the child. We need to change the state with the login button on the effect module from  "./Login";
  // const userLoggedIn = () => {
  //   console.log("test");
  //   setLoggedIn(true);
  // };

  return (
    <div>
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <h1 id="mainTitle" className="display-3 text-center ml-5">
              Worki
            </h1>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-right">
          <Nav className="text-right ml-auto" id="navUl">
            <Nav.Link
              className="navLink align-items-center"
              href="/howitworks?"
              id="linHowDoesItWork"
            >
              How does it work?
            </Nav.Link>
            <Nav.Link
              className="navLink align-items-center"
              href="/employersignup"
              id="linkEmployerSignup"
            >
              For Employers
            </Nav.Link>

            <div
              id="buttons"
              className={
                location.pathname === "/employersignup"
                  ? "hide"
                  : "navLink d-flex align-self-center"
              }
            >
              <Login />
              <Link to="/usersignup">
                <Button id="signupButton" className="btn btn-success mr-5">
                  Sign up!
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* <Navbar.Collapse id="basic-navbar-nav" className="text-right">
              <Nav className="text-right ml-auto d-flex " id="navUl">
                <Nav.Link
                  className="container d-flex align-items-center"
                  href="#"
                >
                  <h3 className="align-items-center">Welcome back!</h3>
                </Nav.Link>
                <Nav.Link className="container d-flex">
                  <div className="align-self-center">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.2xtbyxEs4kpIPIo33MotmQHaEo&pid=Api"
                      alt="profilepicture"
                      width="100"
                    />
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button, Navbar, Nav } from "react-bootstrap";
// import Login from "./UserLogin";
// import "./NavigationBar.css";
// import IsAuthenticated from "../HOC-CheckLoginUser&Employers/IsAuthenticated";

// const First = () => (
//   <>
//     <Login />
//     <Link to="/usersignup">
//       <Button id="signupButton" className="btn btn-success mr-5">
//         Sign up!
//       </Button>
//     </Link>
//   </>
// );

// const Second = () => (
//   <>
//     <Navbar.Collapse id="basic-navbar-nav" className="text-right">
//       <Nav className="text-right ml-auto d-flex " id="navUl">
//         <Nav.Link className="container d-flex align-items-center" href="#">
//           <h3 className="align-items-center">Welcome back!</h3>
//         </Nav.Link>
//         <Nav.Link className="container d-flex">
//           <div className="align-self-center">
//             <img
//               src="https://tse1.mm.bing.net/th?id=OIP.2xtbyxEs4kpIPIo33MotmQHaEo&pid=Api"
//               alt="profilepicture"
//               width="100"
//             />
//           </div>
//         </Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </>
// );

// export default function Navigation() {
//   const location = useLocation();

//   return (
//     <div>
//       <Navbar id="navbar" expand="lg">
//         <Navbar.Brand>
//           <Link to="/">
//             <h1 id="mainTitle" className="display-3 text-center ml-5">
//               Worki
//             </h1>
//           </Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="text-right">
//           <Nav className="text-right ml-auto" id="navUl">
//             <Nav.Link
//               className="navLink align-items-center"
//               href="/howitworks?"
//               id="linHowDoesItWork"
//             >
//               How does it work?
//             </Nav.Link>
//             <Nav.Link
//               className="navLink align-items-center"
//               href="/employersignup"
//               id="linkEmployerSignup"
//             >
//               For Employers
//             </Nav.Link>
//             <div
//               id="buttons"
//               className={
//                 location.pathname === "/employersignup"
//                   ? "hide"
//                   : "navLink d-flex align-self-center"
//               }
//             >
//               <IsAuthenticated
//                 WrappedComponent={First}
//                 WithRedirect={false}
//                 IfNotAuthenticatedComponent={true}
//                 typeOfUser={"user"}
//               />
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//         <IsAuthenticated
//           WrappedComponent={Second}
//           WithRedirect={false}
//           typeOfUser={"user"}
//         />
//       </Navbar>
//     </div>
//   );
// }
