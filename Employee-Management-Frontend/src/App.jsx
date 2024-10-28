import { Link } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
    <>
      <nav>
        <div className="flex justify-center space-x-4 px-2 pb-3 pt-2">
          {/* Flex container for horizontal alignment */}
          <Link
            to="/employee" // Navigate to Home
            className="flex-1 block rounded-md bg-gray-900 px-3 py-2 text-center text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            All Employee
          </Link>
          <Link
            to="/AddEmployee" // Navigate to AddEmployee
            className="flex-1 block rounded-md bg-gray-900 px-3 py-2 text-center text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Add Employee
          </Link>
        </div>
      </nav>
    </>
  );
}

export default App;
