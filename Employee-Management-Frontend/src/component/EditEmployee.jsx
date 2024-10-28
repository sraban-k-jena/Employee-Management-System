import { useState, useEffect } from "react";
import EmployeeService from "../service/EmployeeService";
import { useParams } from "react-router-dom";

function EditEmployee() {
  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    salary: "",
  });

  const [msg, setMessage] = useState(""); // Declare the msg state here

  const { id } = useParams(); // Extract the employee ID from the route

  useEffect(() => {
    EmployeeService.getEmployeeById(id) // Fetch employee data by id
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  };

  const submitEmp = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, emp) // Use updateEmployee to update the existing employee
      .then((res) => {
        setMessage("Employee Updated Successfully.");
        setEmp({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          salary: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full ">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
            Edit Employee
          </h2>
          {msg && <p className="text-fuchsia-600">{msg}</p>}{" "}
          {/* Display message here */}
          <form className="space-y-4" onSubmit={(e) => submitEmp(e)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Enter first name"
                name="firstName"
                value={emp.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Enter last name"
                name="lastName"
                value={emp.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Enter email"
                name="email"
                value={emp.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Address
              </label>
              <input
                type="address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Enter Address"
                name="address"
                value={emp.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Salary
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Enter salary"
                name="salary"
                value={emp.salary}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Submit
              </button>
              <input
                type="reset"
                value="Reset"
                className="ml-2 w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditEmployee;
