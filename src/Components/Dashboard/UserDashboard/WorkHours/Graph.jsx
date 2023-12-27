import React, { useState, useEffect, useContext } from 'react';
import previous from "../../../../assets/Dashboard/StudentDashboard/previous.svg";
import next from "../../../../assets/Dashboard/StudentDashboard/next.svg";
import clock from "../../../../assets/Dashboard/StudentDashboard/clock.svg";
import axios from 'axios';
import WorkingHourDetails from './WorkingHourDetails';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { BarChart } from '@mui/x-charts/BarChart';



const Graph = () => {
  const [taskDateTime, setTaskDateTime] = useState([]);



  // my submission
  const { user } = useContext(AuthContext);
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  console.log(submissions)

  const [selectedFilter, setSelectedFilter] = useState('currentMonth');
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0]); // One value for each week



  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    setSubmissions(...submissions)
    if (submissions && submissions?.length > 0) {
      // If true, set the value of taskDateTime to submissions
      setTaskDateTime(submissions);
    } else {
      // If false, set an empty array as the value of taskDateTime
      setTaskDateTime([]);
    }

  };

 // console.log(taskDateTime)

  //console.log(graphData)

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API
        }/api/v1/taskSubmissions/submissions/${user?.email}`
      )
      .then((taskSubmissions) => {
        setAllSubmissions(taskSubmissions?.data.filter((item) => item?.submissionStatus === "Selected"));
      })
      .catch((error) => console.error(error));
  }, [user]);

  useEffect(() => {
    // Filter submissions based on the selected filter and submissionDateTime
    const filterSubmissions = () => {
      const currentDate = new Date();

      const filteredSubmissions =
        selectedFilter === 'currentMonth'
          ? allSubmissions.filter((submission) => {
            const submissionDate = new Date(submission?.submissionDateTime);
            return submissionDate.getMonth() === currentDate.getMonth() && submissionDate.getFullYear() === currentDate.getFullYear();
          })
          : selectedFilter === 'previousMonth'
            ? allSubmissions.filter((submission) => {
              const submissionDate = new Date(submission?.submissionDateTime);
              const previousMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1; // Handle December as a special case
              const previousYear = currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
              return submissionDate.getMonth() === previousMonth && submissionDate.getFullYear() === previousYear;
            })
            : allSubmissions;

      setSubmissions(filteredSubmissions);
    };

    filterSubmissions();
  }, [selectedFilter, allSubmissions]);



  //console.log(submissions)



  const groupTasksByWeekAndMonth = (tasks) => {
    const groupedTasks = {};
   // console.log(tasks)

    tasks.forEach((task) => {
      const taskDate = new Date(task.date);
      const year = taskDate.getFullYear();
      const month = taskDate.getMonth();
      const weekNumber = getWeekNumber(taskDate);

      // const key = `${year}-${month + 1}-Week${weekNumber}`;
      const key = `Week${weekNumber}`;

      if (!groupedTasks[key]) {
        groupedTasks[key] = {
          tasks: [],
          sumTime: 0, // Initialize sum for time
        };
      }

      const existingTaskIndex = groupedTasks[key].tasks.findIndex(existingTask => existingTask._id === task._id);

      if (existingTaskIndex !== -1) {
        // Calculate the time difference between the current task and the existing task
        const timeDifference = parseInt(task.time, 10) - parseInt(groupedTasks[key].tasks[existingTaskIndex].time, 10);

        // Check if the difference is positive before subtracting
        if (timeDifference > 0) {
          groupedTasks[key].sumTime -= timeDifference;
        }

        // Update other properties as needed
        groupedTasks[key].tasks[existingTaskIndex] = task; // Update the task
      } else {
        // If the task does not exist, add it to the week
        groupedTasks[key].tasks.push(task);
        // Add the time to the sum
        groupedTasks[key].sumTime += parseInt(task.time, 10);
        // Add other properties as needed
      }
    });

    return groupedTasks;
  };

  const getWeekNumber = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const days = Math.floor((date - startOfMonth) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startOfMonth.getDay() + 1) / 7);
    return weekNumber;
  };


  const tasksByWeekAndMonth = groupTasksByWeekAndMonth(taskDateTime);
  //console.log(tasksByWeekAndMonth)
  //console.log(taskDateTime)




  //graph
  const weeksInMonth = 5; // Assuming 4 weeks in a month for simplicity
  const weeks = Array.from({ length: weeksInMonth }, (_, i) => i + 1);



  useEffect(() => {
    const fetchData = async () => {
      const newData = [];

      for (let weekNumber = 1; weekNumber <= 5; weekNumber++) {
        const weekKey = `Week${weekNumber}`;
        const sumTime = tasksByWeekAndMonth[weekKey]?.sumTime || 0;
        newData.push(sumTime);
      }

      setGraphData(prevData => {

        if (JSON.stringify(prevData) !== JSON.stringify(newData)) {
          return newData;
        }

        return prevData;
      });
    };

    fetchData();
  }, [selectedFilter, tasksByWeekAndMonth]);

  const totalHour = graphData.reduce((acc, currentValue) => acc + currentValue, 0);
 
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <img src={clock} alt="icon" />
          <p className="text-[25px] font-semibold ">
            {totalHour}
            <span className="text-[#9F9F9F] me-2">Hours</span>
           {'0 '}
            <span className="text-[#9F9F9F]">Minutes</span>
          </p>
        </div>
        <div className='px-[14px] py-[13px]' style={{
          borderRadius: "28px",
          border: "1px solid #D7D7D7",
        }}>
          <select className='text-xl font-medium' value={selectedFilter} onChange={handleFilterChange}>
            <option value="currentMonth">Current Month</option>
            <option value="previousMonth">Previous Month</option>
            {/* <option value="lastTwoMonths">Last Two Months</option> */}
          </select>
        </div>
      </div>

      <div className=' w-full flex justify-center'>

        <BarChart

          xAxis={[{ scaleType: 'band', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4' , 'Week 5'] }]}
          series={[ { data: graphData,color: '#BEC9FF' }]}
          width={800}
          height={400}
        />

      </div>

      {
        (submissions?.length) ?
          submissions?.map((item) => (
            <div>
              <WorkingHourDetails
                item={item}
                taskDateTime={taskDateTime}
                setTaskDateTime={setTaskDateTime}
              />

            </div>
          ))
          : <p>No data found</p>


      }

    </div>
  );
};

export default Graph;
