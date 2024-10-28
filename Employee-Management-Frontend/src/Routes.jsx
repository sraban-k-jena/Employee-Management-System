import { createBrowserRouter } from "react-router-dom";
import Employee from "./component/Employee";
import AddEmployee from "./component/AddEmployee";
import Home from "./component/Home";
import EditEmployee from "./component/EditEmployee";

const Router = createBrowserRouter([
  {
    path: "/", // Ensure the correct path
    element: <Employee />,
    children: [
      {
        index: true, // When visiting /employee, it will render AddEmployee
        element: <Home />,
      },
    ],
  },

  {
    path: "/EditEmployee/:id", // Define a dynamic route for editing
    element: <EditEmployee />,
  },
  {
    path: "/AddEmployee", // Route for the "Add Employee" page
    element: <AddEmployee />,
  },

  {
    path: "/employee", // Route for the "All Employee" page
    element: <Home />, // Render Home component when accessing this path
  },
]);

export default Router;
