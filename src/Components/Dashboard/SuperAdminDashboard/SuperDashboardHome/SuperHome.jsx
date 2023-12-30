import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import TrendingTasks from "./TrendingTasks";
import Tasks from "./Tasks";
import axios from "axios";

const SuperHome = () => {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks`)
      .then((tasks) => {
        setAllTasks(tasks?.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <TopSection />
      {/* <TrendingTasks /> */}
      <Tasks allTasks={allTasks} />
    </div>
  );
};

export default SuperHome;
