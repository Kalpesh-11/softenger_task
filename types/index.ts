export interface employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image?: string | null;
}
export interface empStoreProps {
  employees: employee[];
  setEmployee: () => void;
  addEmployee: (data: AddFormProps) => void;
  removeEmployee: (id: number) => void;
  editEmployee: (data: employee) => void;
}
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export interface AddFormProps {
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image?: string | null;
}
