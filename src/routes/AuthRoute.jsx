import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
    const userInfo = useSelector((store) => store.user.userInfo);
    return userInfo !== null ? children : <Navigate to="/login" />
}