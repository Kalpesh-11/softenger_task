import { empStoreProps } from "@/types";
import { create } from "zustand";
const key = "emp";
const empStore = create<empStoreProps>((set) => ({
  employees: [],
  setEmployee: async () => {
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
  },
  removeEmployee: (data) => {},
  editEmployee: (id) => {},
}));
export default empStore;
