import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import CreateTask from "../Pages/Dashboard/CreateTask";
import TaskDetails from "../Pages/Dashboard/TaskDetails";
import CompleteShowMore from "../Pages/Dashboard/CompleteShowMore";
import Team from "../Pages/Dashboard/Team";
import DashboardBar from "../Pages/Dashboard/DashboardBar";
import Message from "../Pages/Dashboard/Message";
import UserDashboardHome from "../Pages/UserDashboard/UserDashboardHome";
import UserDashboardLeaderBoard from "../Pages/UserDashboard/UserDashboardLeaderBoard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
  },
  {
    path: "/createTask",
    element: <CreateTask />,
  },
  {
    path: "/taskDetails",
    element: <TaskDetails />,
  },
  {
    path: "/completeShowMore",
    element: <CompleteShowMore />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/dashboardBar",
    element: <DashboardBar />,
  },
  {
    path: "/userDashboard",
    element: <UserDashboardHome />,
  },
  {
    path: "/leaderboard",
    element: <UserDashboardLeaderBoard/>,
  },

]);
