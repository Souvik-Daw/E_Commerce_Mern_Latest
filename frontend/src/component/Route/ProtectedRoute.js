import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  return (
    <Fragment>
      {loading === false && (
        <Routes>
        <Route
          {...rest}
          render={(props) => {

            console.log(isAuthenticated);

            if (isAuthenticated === false) {
                navigate("/login");
            }

            else if (isAdmin === true && user.role !== "admin") {
                navigate("/login");
            }
            
            return <Component {...props} />;
          }}
        />
        </Routes>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
