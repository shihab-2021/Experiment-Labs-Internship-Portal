import React, { useContext, useEffect, useState } from "react";
import MyStudentsTop from "./MyStudentsTop";
import MyStudentsData from "./MyStudentsData";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import axios from "axios";
import Loading from "../../../Shared/Loading/Loading";

const SDMyStudentsMain = ({ setShowAddStudent }) => {
  const [myStudents, setmyStudents] = useState([]);
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
    Loading();
    if (userInfo?.organizations) {
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/counsellorId/${
            userInfo?.organizations[0]?.counsellorId
          }/schoolId/${userInfo?.organizations[0]?.schoolId}`
        )
        .then((students) => {
          setmyStudents(students?.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          Loading().close();
        });
    }
  }, [userInfo]);

  console.log(myStudents);
  return (
    <div>
      <MyStudentsTop></MyStudentsTop>
      <MyStudentsData
        setShowAddStudent={setShowAddStudent}
        students={myStudents}
      ></MyStudentsData>
    </div>
  );
};

export default SDMyStudentsMain;
