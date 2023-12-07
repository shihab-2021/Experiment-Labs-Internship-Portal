import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/dashboard",
    element: <DashboardHome></DashboardHome>,
  },
]);
