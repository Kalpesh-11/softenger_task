import { EmployeeCard } from "@/components";
import empStore from "@/stores/empStore";

const EmployeeList = () => {
  const { employees, setSelectedEmployeeID, setCurrentTab, removeEmployee } =
    empStore();
  const handleEdit = (employeeId: number) => {
    setCurrentTab(1);
    setSelectedEmployeeID(employeeId);
  };

  const handleRemove = (employeeId: number) => {
    removeEmployee(employeeId);
  };
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
