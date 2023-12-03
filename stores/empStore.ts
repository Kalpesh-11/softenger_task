import { empStoreProps } from "@/types";
import { create } from "zustand";
const key = "emp";
const empStore = create<empStoreProps>((set) => ({
  employees: [],
  currentTab: 0,
  selectedEmployeeID: 0,
  editEmployee: {
    id: 0,
    employee_name: "",
    employee_salary: 0,
    employee_age: 0,
    profile_image: "",
  },
  setCurrentTab: (currentTab) => {
    set({ currentTab });
    set({ selectedEmployeeID: 0 });
  },
  setEmployees: async () => {
    if (!localStorage.getItem(key)) {
      const res = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      const data = await res.json();
      if ("success" === data.status) {
        localStorage.setItem(key, JSON.stringify(data.data));
      }
    }
    const storedData = localStorage.getItem(key);
    if (storedData) {
      set({ employees: JSON.parse(storedData) });
    }
  },
  addEmployee: (data) => {
    const empData = {
      ...data,
      profile_image: data.profile_image || "",
    };
    set((state) => {
      const lastEmployee = state.employees[state.employees.length - 1];
      const newId = lastEmployee ? lastEmployee.id + 1 : 1;

      const updatedEmployees = [...state.employees, { id: newId, ...empData }];
      localStorage.setItem(key, JSON.stringify(updatedEmployees));
      return { employees: updatedEmployees };
    });
    return true;
  },
  setSelectedEmployeeID: (selectedEmployeeID) => {
    set({ selectedEmployeeID });
    empStore.getState().setEditEmployee(selectedEmployeeID);
  },
  handleEditEmployee: async (id, newData) => {
    let uploadedFileName = "";
    if (newData.profile_image && newData.profile_image[0]) {
      const formData = new FormData();
      formData.set("file", newData.profile_image[0]);
      const response = await fetch("api/fileUploader", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        uploadedFileName = newData.profile_image[0]?.name;
      }
    }
    set((state) => {
      const updatedEmployees = state.employees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              ...newData,
              profile_image: uploadedFileName || employee.profile_image,
            }
          : employee
      );

      localStorage.setItem(key, JSON.stringify(updatedEmployees));
      return { employees: updatedEmployees };
    });
    return true;
  },
  setEditEmployee: (id) => {
    set((state) => {
      const editEmployee = state.employees.find(
        (employee) => employee.id === id
      );
      return {
        editEmployee: editEmployee,
      };
    });
  },
  removeEmployee: (employeeId) => {
    set((state) => {
      const updatedEmployees = state.employees.filter(
        (employee) => employee.id !== employeeId
      );

      localStorage.setItem(key, JSON.stringify(updatedEmployees));

      return { employees: updatedEmployees };
    });
  },
}));
export default empStore;
