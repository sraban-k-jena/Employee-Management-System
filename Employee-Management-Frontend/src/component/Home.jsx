import { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { Link } from "react-router-dom";
import EditEmployee from "./EditEmployee";

function Home() {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployee()
      .then((res) => {
        console.log(res.data);

        setEmpList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteEmp = (id) => {
    EmployeeService.deleteById(id)
      .then(() => {
        fetchEmployees(); // Refresh the list after deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          All Records of Employee
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left">SL No</th>
                <th className="py-2 px-4 text-left">Father Name</th>
                <th className="py-2 px-4 text-left">Last Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Salary</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {empList.map((e, num) => {
                return (
                  <tr className="border-t">
                    <td className="py-2 px-4">{num + 1}</td>
                    <td className="py-2 px-4">{e.firstName}</td>
                    <td className="py-2 px-4">{e.lastName}</td>
                    <td className="py-2 px-4">{e.email}</td>
                    <td className="py-2 px-4">{e.address}</td>
                    <td className="py-2 px-4">{e.salary}</td>
                    <td className="py-2 px-4">
                      <Link
                        to={`/EditEmployee/${e.id}`}
                        className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteEmp(e.id)}
                        className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Home;
