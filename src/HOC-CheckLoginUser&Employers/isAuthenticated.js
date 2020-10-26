import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function isAuthenticated(wrappedComponent) {
  const [authValid, setAuth] = useState(false);
  // In real life case, you would send a auth server request asking if the current access token is still valid
  useEffect(() => {
    axios;

    const serverRes = true;
    setAuth(true);
  }, []);
  return <div>{authValid ? <wrappedComponent /> : <Redirect to="/" />}</div>;
}
