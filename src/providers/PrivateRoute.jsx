import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="container mx-auto h-screen">
        <div className="mt-96 ml-[500px]">
          {/* <progress className="progress w-56"></progress> */}
          <progress
            className="progress progress-accent w-56"
            value="0"
            max="100"
          ></progress>
          <br />
          <progress
            className="progress progress-accent w-56"
            value="10"
            max="100"
          ></progress>
          <br />
          <progress
            className="progress progress-accent w-56"
            value="40"
            max="100"
          ></progress>
          <br />
          <progress
            className="progress progress-accent w-56"
            value="70"
            max="100"
          ></progress>
          <br />
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
