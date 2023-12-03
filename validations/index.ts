import * as yup from "yup";

export const addEmployeeValidationSchema = yup.object().shape({
  employee_name: yup.string().required("Enter a name to employee"),
  employee_salary: yup
    .number()
    .required()
    .typeError("You must give a salary to salary to employee")
    .positive("Give them, don't steal from them")
    .max(240000000, "Elon musk wanted to meet you in person"),
  employee_age: yup
    .number()
    .required()
    .typeError("Is he Alive !")
    .positive("Enter a real age, not fiction!")
    .max(150, "Do you know it can be count as world record"),
});
export const editEmployeeValidationSchema = yup.object().shape({
  employee_name: yup.string().required("Enter a name to employee"),
  employee_salary: yup
    .number()
    .required()
    .typeError("You must give a salary to salary to employee")
    .positive("Give them, don't steal from them")
    .max(240000000, "Elon musk wanted to meet you in person"),
  employee_age: yup
    .number()
    .required()
    .typeError("Is he Alive !")
    .positive("Enter a real age, not fiction!")
    .max(150, "Do you know it can be count as world record"),
  profile_image: yup.mixed(),
});
