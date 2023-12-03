"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addEmployeeValidationSchema } from "@/validations";
import empStore from "@/stores/empStore";
import { AddFormProps } from "@/types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
export default function AddEmployee() {
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const { addEmployee } = empStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addEmployeeValidationSchema),
  });
  const onsubmit = async (data: AddFormProps) => {
    try {
      const res = await addEmployee(data);
      if (res) {
        reset();
        setIsSuccessSnackbarOpen(true);
      }
    } catch (err) {}
  };
  const handleCloseSuccessSnackbar = () => {
    setIsSuccessSnackbarOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl required sx={{ mx: "auto", mt: 3 }} fullWidth>
          <TextField
            label="Employee Name"
            variant="outlined"
            color="secondary"
            {...register("employee_name")}
            helperText={errors.employee_name?.message}
            error={errors.employee_name?.message ? true : false}
            fullWidth
            sx={{ mb: 2 }}
          />
          <div className="flex flex-col mb-6 md:flex-row md:space-x-4">
            <TextField
              label="Salary"
              variant="outlined"
              color="secondary"
              type="number"
              {...register("employee_salary")}
              helperText={errors.employee_salary?.message}
              error={errors.employee_salary?.message ? true : false}
              className="mb-4 md:mb-0 flex-1"
              fullWidth
            />

            <TextField
              label="Age"
              variant="outlined"
              color="secondary"
              type="number"
              {...register("employee_age")}
              helperText={errors.employee_age?.message}
              error={errors.employee_age?.message ? true : false}
              className="mb-4 md:mb-0 flex-1"
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              variant="outlined"
              type="submit"
              className="w-full items-center md:w-1/2"
              color="secondary"
            >
              Add Employee
            </Button>
          </div>
        </FormControl>
      </form>
      <Snackbar
        open={isSuccessSnackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSuccessSnackbar}
      >
        <Alert onClose={handleCloseSuccessSnackbar} severity="success">
          Employee added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
