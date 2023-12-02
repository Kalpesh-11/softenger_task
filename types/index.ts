export interface employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image?: string | null;
}
export interface empStoreProps {
  employees: employee[];
  currentTab: number;
  selectedEmployeeID: number;
  editEmployee: employee;
  setCurrentTab: (id: number) => void;
  setEmployee: () => void;
  addEmployee: (data: AddFormProps) => void;
  removeEmployee: (id: number) => void;
  setSelectedEmployeeID: (id: number) => void;
  handleEditEmployee: (id: number, data: EditFormProps) => void;
  setEditEmployee: (id: number) => void;
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
export interface EditFormProps {
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image?: string | null;
}
