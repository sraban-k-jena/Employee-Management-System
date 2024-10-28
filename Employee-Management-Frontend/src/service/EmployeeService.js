import axios from "axios";

const BASE_URL = "http://localhost:1200/employee";

class EmployeeService {
  addEmployee(emp) {
    return axios.post(BASE_URL + "/addEmployee", emp);
  }

  getAllEmployee() {
    return axios.get(BASE_URL + "/allEmployee");
  }

  getEmployeeById(id) {
    return axios.get(BASE_URL + "/getEmployee/" + id);
  }

  deleteById(id) {
    return axios.delete(BASE_URL + "/deletEmployee/" + id);
  }

  updateEmployee(id, emp) {
    return axios.put(BASE_URL + "/updateEmployee/" + id, emp);
  }
}
export default new EmployeeService();
