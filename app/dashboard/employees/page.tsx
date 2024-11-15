import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import CreateEmployee from "./[id]/_components/CreateEmployee";
import FormCreateEmployee from "./[id]/_components/FormCreateEmployee";

const EmployeesPage = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    headers: {
      ...authHeaders(),
    },
  });
  const employees: Employee[] = await response.json();

  return (
    <div className="flex flex-wrap flex-grow-0 h-[90vh] gap-4 overflow-y-auto p-10">
      {employees.map((employee: Employee) => {
        if (employee.employeePhoto  !== null) {
          return <EmployeePhotoCard key={employee.id} employee={employee} />;
        }else{
          return <EmployeeCard key={employee.id} employee={employee} />;
        }
      })}
      <div className="absolute bottom-10 right-10">
        <CreateEmployee>
          <FormCreateEmployee/>
        </CreateEmployee>
      </div>
    </div>
  );
};
export default EmployeesPage;
