import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppData } from "../context/AppContext";

const ProtectedRoute = ()=> {
    const { isAuth, loading, user } = useAppData()

    const location = useLocation();

    if(loading) return null;

    if(!isAuth) return <Navigate to="/login" replace/>

    if (!user?.role && location.pathname !== "/select-role") {
        return <Navigate to={'/select-role'} replace/>
    }

    if (user?.role !== null && location.pathname === "/select-role") {
        return <Navigate to={'/'} replace/>
    }


    return<Outlet/>
    // if(user?.role === "customer") return <Navigate to="/customer" replace/>
    // if(user?.role === "rider") return <Navigate to="/rider" replace/>
    // if(user?.role === "seller") return <Navigate to="/seller" replace/>
}

export default ProtectedRoute;