/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
 
    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
 
};

export default PrivateRoute;