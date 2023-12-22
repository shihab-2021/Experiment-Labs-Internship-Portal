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
import Internship from "../Pages/UserDashboard/Internship";
import MyApplication from "../Pages/UserDashboard/MyApplication";
import WorkHours from "../Pages/UserDashboard/WorkHours";
import InternshipSubmission from "../Pages/UserDashboard/InternshipSubmission";
import EditProfile from "../Pages/Dashboard/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/organization/:id",
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
    path: "/completeShowMore/:id",
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
    element: <UserDashboardLeaderBoard />,
  },
  {
    path: "/internship",
    element: <Internship />,
  },
  {
    path: "/myApplication",
    element: <MyApplication />,
  },
  {
    path: "/workHours",
    element: <WorkHours />,
  },
  {
    path: "/internshipSubmission/:id",
    element: <InternshipSubmission />,
  },
  {
    path: "/editProfile/:id",
    element: <EditProfile />,
  },
]);
