import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SDMyStudentsMain from "../../Components/Dashboard/SchoolDashboard/SDMyStudents/SDMyStudentsMain";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AddStudent from "../../Components/Dashboard/SchoolDashboard/SDMyStudents/AddStudent";

const SDMyStudents = () => {
  const [showAddStudent, setShowAddStudent] = useState(false);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Students</title>
      </Helmet>
      <DashboardLayout>
        {!showAddStudent && (
          <SDMyStudentsMain setShowAddStudent={setShowAddStudent} />
        )}
        {showAddStudent && <AddStudent setShowAddStudent={setShowAddStudent} />}
      </DashboardLayout>
    </div>
  );
};

export default SDMyStudents;
