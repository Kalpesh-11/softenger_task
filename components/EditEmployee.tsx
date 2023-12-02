"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addEmployeeValidationSchema } from "@/validations";
import empStore from "@/stores/empStore";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { EditFormProps } from "@/types";
import { useEffect } from "react";
import Image from "next/image";
export default function EditEmployee() {
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
    resolver: yupResolver(addEmployeeValidationSchema),
  });
  const onsubmit = (data: EditFormProps) => {
    try {
      handleEditEmployee(selectedEmployeeID, data);
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
        maxHeight: employees.length * 4.5 + 5,
        width: 250,
      },
    },
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl required sx={{ m: 1, width: 300, mt: 3 }}>
          <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
          <Select
            value={selectedEmployeeID.toString()}
            label="Age *"
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {employees.map((employee) => {
              return (
                <MenuItem value={employee.id}>
                  {employee.id} - {employee.employee_name}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            label="Employee Name"
            variant="outlined"
            {...register("employee_name")}
            helperText={errors.employee_name?.message}
            error={errors.employee_name?.message ? true : false}
          />
          <TextField
            label="Salary"
            variant="outlined"
            type="number"
            {...register("employee_salary")}
            helperText={errors.employee_salary?.message}
            error={errors.employee_salary?.message ? true : false}
          />
          <TextField
            label="Age"
            variant="outlined"
            type="number"
            {...register("employee_age")}
            helperText={errors.employee_age?.message}
            error={errors.employee_age?.message ? true : false}
          />

          <input accept="image/*" type="file" {...register("profile_image")} />

          <Button variant="outlined" type="submit">
            Signup
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
