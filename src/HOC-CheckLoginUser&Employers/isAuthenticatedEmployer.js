import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function IsAuthenticated(props) {
  const { WrappedComponent, typeOfUser } = props;
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (typeOfUser) {
      const route =
        typeOfUser === "employer"
          ? "http://localhost:5000/employer/employerIsAuthenticated"
          : null;
      axios
        .get(route, { withCredentials: true })
        .then((res) => {
          setUserId(res.data.user_id); // Getting the ID from authenticated user
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, [typeOfUser]);

  return (
    <div>
      {/* If user or employer are not signed in, redirect to signup page */}
      {error ? (
        <Redirect to="/employersignup" />
      ) : userId ? (
        <WrappedComponent dataId={userId} {...props} />
      ) : null}
      {/* If user is signed in, pass the id */}
      {/* {error ? null : <Application dataId={userId} {...props} />} */}
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Redirect } from "react-router-dom";

// export default function IsAuthenticated(props) {
//   let {
//     WrappedComponent,
//     typeOfUser,
//     withRedirect,
//     IfNotAuthenticatedComponent,
//   } = props;
//   const [error, setError] = useState(false);
//   const [userId, setUserId] = useState();

//   if (!withRedirect) withRedirect = true;

//   useEffect(() => {
//     if (typeOfUser) {
//       const route =
//         typeOfUser === "user"
//           ? "http://localhost:5000/user/userIsAuthenticated"
//           : "http://localhost:5000/employer/employerIsAuthenticated";
//       axios
//         .get(route, { withCredentials: true })
//         .then((res) => {
//           setUserId(res.data.user_id); // Getting the ID from authenticated user
//         })
//         .catch((e) => {
//           setError(true);
//         });
//     }
//   }, [typeOfUser]);

//   const decideWhatToDo = () => {
//     if (error) {
//       if (IfNotAuthenticatedComponent) {
//         return <WrappedComponent {...props} />;
//       } else if (withRedirect) {
//         return <Redirect to="/usersignup" test={withRedirect} />;
//       } else {
//         return null;
//       }
//     } else {
//       if (IfNotAuthenticatedComponent) {
//         return null;
//       } else {
//         return (
//           <WrappedComponent dataId={userId} test={withRedirect} {...props} />
//         );
//       }
//     }
//   };

//   return (
//     <div>
//       {/* If user or employer are not signed in, redirect to signup page */}
//       {decideWhatToDo()}
//     </div>
//   );
// }
