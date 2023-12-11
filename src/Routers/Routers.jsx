import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import CreateTask from "../Pages/Dashboard/CreateTask";
import TaskDetails from "../Pages/Dashboard/TaskDetails";
import CompleteShowMore from "../Pages/Dashboard/CompleteShowMore";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/dashboard",
    element: <DashboardHome></DashboardHome>,
  },
  {
    path : "/createTask",
    element : <CreateTask></CreateTask>
  },
  {
    path : "/taskDetails",
    element : <TaskDetails/>
  },
  {
    path : "/completeShowMore",
    element : <CompleteShowMore/>
  },
]);
