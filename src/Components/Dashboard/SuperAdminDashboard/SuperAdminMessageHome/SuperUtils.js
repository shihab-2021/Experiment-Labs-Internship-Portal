import axios from 'axios';

export const getPerson = async (users, currentUser) => {
    try {
        const otherPersonId = users[0]?._id === currentUser ? users[1]?._id : users[0]?._id;
        const userData = await axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/${otherPersonId}`);
        console.log(userData?.data?.user?.firstName + " " + userData?.data?.user?.lastName || "");
        return userData?.data?.user?.firstName + " " + (userData?.data?.user?.lastName || "");
    } catch (error) {
        console.error('Error fetching person:', error);
        throw error;
    }
};
