import * as yup from "yup";

export const addEmployeeValidationSchema = yup.object().shape({
  employee_name: yup.string().required("Enter a name to employee"),
  employee_salary: yup
    .number()
    .required()
    .typeError("You must give a salary to salary to employee")
    .positive("Give them, don't steal from them"),
  employee_age: yup
    .number()
    .required()
    .typeError("Enter a real age, not fiction!"),
});
