import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AdminDashboardHome from "../Components/Dashboard/AdminDashboard/AdminDashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/dashboard",
    element: <AdminDashboardHome></AdminDashboardHome>,
  },
]);
