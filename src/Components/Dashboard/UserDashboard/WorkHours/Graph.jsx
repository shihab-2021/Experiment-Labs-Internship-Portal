import React, { useState, useEffect } from 'react';
import previous from "../../../../assets/Dashboard/StudentDashboard/previous.svg";
import next from "../../../../assets/Dashboard/StudentDashboard/next.svg";
import clock from "../../../../assets/Dashboard/StudentDashboard/clock.svg";

const daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const getCurrentWeek = (date) => {
  const currentDate = new Date(date);
  const currentDay = currentDate.getDay();
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - currentDay);
  return startOfWeek;
};

const Graph = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [graphData, setGraphData] = useState([12, 19, 3, 5, 2, 3, 9]);
  const [selectedFilter, setSelectedFilter] = useState('');

  const prevWeek = () => {
    setGraphData(prevData => {
      const lastValue = prevData.pop();
      prevData.unshift(lastValue);
      return [...prevData];
    });
  };

  const nextWeek = () => {
    setGraphData(prevData => {
      const firstValue = prevData.shift();
      prevData.push(firstValue);
      return [...prevData];
    });
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    handleFilter();
  };

  useEffect(() => {
    // Fetch data for the selected month (replace this with your logic)
    const fetchData = async () => {
      // Simulating fetching data for the selected month
      // Replace this with your actual data-fetching logic
      const newData = [40, 50, 90, 45, 47, 69, 55];
      setGraphData(newData);
    };

    fetchData();
  }, [selectedMonth, selectedFilter]);

  const handleFilter = () => {
    switch (selectedFilter) {
      case 'lastTwoMonths':
        // Handle last two months filter
        break;
      case 'lastMonth':
        // Handle last month filter
        break;
      case 'lastThreeMonths':
        // Handle last three months filter
        break;
      default:
      // Handle other cases if needed
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={clock} alt="icon" />
          <p className="text-[25px] font-semibold ">40 <span className="text-[#9F9F9F] me-2">Hours</span>36 <span className="text-[#9F9F9F]">Minutes</span></p>
        </div>
        <div className='px-[14px] py-[13px]' style={{
          borderRadius: "28px",
          border: "1px solid #D7D7D7",
        }}>
          <select className='text-xl font-medium' value={selectedFilter} onChange={handleFilterChange}>
            <option value="lastTwoMonths">Last Two Months</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastThreeMonths">Last Three Months</option>
          </select>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #E2E2E2",
          background: "#FFF",
          boxShadow: "0px 5px 20px 0px #F7F8FF"
        }}
        className='my-10 p-3'>

        <div className='flex justify-between items-center' style={{ width: '100%' }}>
          <button onClick={prevWeek}><img src={previous} alt='icon' /></button>
          <div className='w-full justify-center flex gap-[65px]' style={{ display: '', alignItems: 'flex-end' }}>
            {daysOfWeek.map((day, index) => (
              <div key={index} style={{ marginRight: '10px', textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: `${(graphData[index] / 30) * 100}px`, // Adjusted based on the value
                  backgroundColor: '#BEC9FF',
                  margin: '0 auto',
                }} />
                <span>{day}</span>
              </div>
            ))}
          </div>
          <button onClick={nextWeek}><img src={next} alt='icon' /></button>
        </div>
      </div>
    </div>
  );
};

export default Graph;
