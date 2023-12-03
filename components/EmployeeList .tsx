"use client";
import { EmployeeCard } from "@/components";
import empStore from "@/stores/empStore";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
const EmployeeList = () => {
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const { employees, setSelectedEmployeeID, setCurrentTab, removeEmployee } =
    empStore();
  const handleEdit = (employeeId: number) => {
    setCurrentTab(1);
    setSelectedEmployeeID(employeeId);
  };

  const handleRemove = (employeeId: number) => {
    removeEmployee(employeeId);
    setIsSuccessSnackbarOpen(true);
  };
  const handleCloseSuccessSnackbar = () => {
    setIsSuccessSnackbarOpen(false);
  };
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      ))}
      <Snackbar
        open={isSuccessSnackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSuccessSnackbar}
      >
        <Alert onClose={handleCloseSuccessSnackbar} severity="success">
          Employee Removed!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EmployeeList;
