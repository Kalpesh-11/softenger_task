import React from "react";
import ViewEmployee from "./ViewEmployee";
import empStore from "@/stores/empStore";

const EmployeeList = () => {
  const { employees, setSelectedEmployeeID, setCurrentTab, removeEmployee } =
    empStore();
  const handleEdit = (employeeId) => {
    setSelectedEmployeeID(employeeId);
    setCurrentTab(1);
  };

  const handleRemove = (employeeId) => {
    removeEmployee(employeeId);
  };

  return (
    <ViewEmployee
      employees={employees}
      onEdit={handleEdit}
      onRemove={handleRemove}
    />
  );
};

export default EmployeeList;
