"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addEmployeeValidationSchema } from "@/validations";
import empStore from "@/stores/empStore";
import { AddFormProps, employee } from "@/types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

export default function AddEmployee() {
  const { addEmployee } = empStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addEmployeeValidationSchema),
  });
  const onsubmit = (data: AddFormProps) => {
    try {
      addEmployee(data);
    } catch (err) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl required sx={{ m: 1, width: 300, mt: 3 }}>
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
          <Button variant="outlined" type="submit">
            Signup
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
