import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CDHomeTopSection from './CDHomeTopSection';
import CDHomeTasks from './CDHomeTasks';
import Swal from 'sweetalert2';
import CDHomeBottomSection from './CDHomeBottomSection';
import Loading from '../../../Shared/Loading/Loading';


const CDHomeMain = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            // Show a loading spinner while the login process is in progress
            Loading();
        axios
            .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks`)
            .then((tasks) => {
                setAllTasks(tasks?.data);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                // Close the loading spinner when the data fetching is complete
             //   setLoading(false);
                Loading().close();
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