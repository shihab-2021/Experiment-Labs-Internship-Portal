import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CDHomeTopSection from './CDHomeTopSection';
import CDHomeTasks from './CDHomeTasks';
import Swal from 'sweetalert2';
import CDHomeBottomSection from './CDHomeBottomSection';


const CDHomeMain = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            // Show a loading spinner while the login process is in progress
    const loadingSwal = Swal.fire({
        title: 'Loading...',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        showConfirmButton: false, // Remove the "OK" button
      });
        axios
            .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks`)
            .then((tasks) => {
                setAllTasks(tasks?.data);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                // Close the loading spinner when the data fetching is complete
                setLoading(false);
                loadingSwal.close();
              });
    }, []);
    return (
        <div>
            <CDHomeTopSection/>
            {/* <TrendingTasks /> */}
            <CDHomeTasks allTasks={allTasks} />
             <CDHomeBottomSection/>

        </div>
    );
};

export default CDHomeMain;