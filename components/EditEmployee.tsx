"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editEmployeeValidationSchema } from "@/validations";
import empStore from "@/stores/empStore";
import { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
export default function EditEmployee() {
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const {
    selectedEmployeeID,
    setSelectedEmployeeID,
    handleEditEmployee,
    editEmployee,
  } = empStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editEmployeeValidationSchema),
  });
  const onsubmit = async (data: any) => {
    try {
      const res = await handleEditEmployee(selectedEmployeeID, data);
      if (res) {
        setIsSuccessSnackbarOpen(true);
      }
    } catch (err) {}
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedEmployeeID(Number(event.target.value));
  };
  useEffect(() => {
    if (selectedEmployeeID) {
      setValue("employee_name", editEmployee.employee_name);
      setValue("employee_salary", editEmployee.employee_salary);
      setValue("employee_age", editEmployee.employee_age);
    }
  }, [selectedEmployeeID]);
  const { employees } = empStore();
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: employees.length * 10 + 5,
        width: 250,
      },
    },
  };
  const handleCloseSuccessSnackbar = () => {
    setIsSuccessSnackbarOpen(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl required sx={{ m: 1, mt: 3 }} fullWidth>
          <InputLabel id="demo-simple-select-readonly-label">
            Select Employee
          </InputLabel>
          <Select
            value={selectedEmployeeID.toString()}
            label="Select Employee *"
            onChange={handleChange}
            MenuProps={MenuProps}
            className="mb-4"
            color="secondary"
          >
            {employees.map((employee) => {
              return (
                <MenuItem value={employee.id} key={employee.id}>
                  {employee.id} - {employee.employee_name}
                </MenuItem>
              );
            })}
          </Select>

          <TextField
            InputLabelProps={{ shrink: true }}
            label="Employee Name"
            variant="outlined"
            {...register("employee_name")}
            helperText={errors.employee_name?.message}
            error={errors.employee_name?.message ? true : false}
            disabled={selectedEmployeeID ? false : true}
            sx={{ mb: 2 }}
            color="secondary"
          />
          <div className="flex flex-col mb-6 md:flex-row md:space-x-4 w-full">
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Salary"
              variant="outlined"
              color="secondary"
              type="number"
              {...register("employee_salary")}
              helperText={errors.employee_salary?.message}
              error={errors.employee_salary?.message ? true : false}
              disabled={selectedEmployeeID ? false : true}
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Age"
              variant="outlined"
              color="secondary"
              type="number"
              {...register("employee_age")}
              helperText={errors.employee_age?.message}
              error={errors.employee_age?.message ? true : false}
              disabled={selectedEmployeeID ? false : true}
              fullWidth
            />
          </div>
          <div className="flex flex-col mb-6 md:flex-row md:space-x-4 w-full">
            <input
              accept="image/*"
              type="file"
              id="profile_image_input"
              {...register("profile_image")}
              className="mb-4"
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              variant="outlined"
              type="submit"
              className="w-1/2 items-center"
              disabled={selectedEmployeeID ? false : true}
              color="secondary"
            >
              Update Employee
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
          Employee updated successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
