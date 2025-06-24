import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login and Register/Pages/Login";
import Register from "../Components/Login and Register/Pages/Register";
import Home from "../Components/Home/Home";
import App from "../App";
import NotificationList from "../Components/NotificationList/NotificationList";
import { AuthRoute } from "./AuthRoute";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <AuthRoute><NotificationList /></AuthRoute> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> }
        ]
    }
])

export default AppRouter;