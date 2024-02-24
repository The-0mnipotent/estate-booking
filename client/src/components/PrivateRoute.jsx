import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../redux/Reducers/userSlice";

function PrivateRoute() {
  const { currentUser } = useSelector(userSelector);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
