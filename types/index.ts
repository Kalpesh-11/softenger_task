export interface employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image?: string;
}
export interface empStoreProps {
  employees: employee[];
  currentTab: number;
  selectedEmployeeID: number;
  editEmployee: employee;
  setCurrentTab: (id: number) => void;
  setEmployees: () => void;
  addEmployee: (data: AddFormProps) => boolean;
  setSelectedEmployeeID: (id: number) => void;
  handleEditEmployee: (
    id: number,
    data: EditFormProps
  ) => boolean | Promise<boolean>;
  setEditEmployee: (id: number) => void;
  removeEmployee: (id: number) => void;
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
  profile_image?: FileList | null | undefined;
}
export interface EmployeeCardProps {
  employee: employee;
  onEdit: (employeeId: number) => void;
  onRemove: (employeeId: number) => void;
}
