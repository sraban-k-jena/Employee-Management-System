import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import App from "../App";

function Employee() {
  return (
    <>
      <Header />
      <App />
      <Outlet />
      <Footer />
    </>
  );
}
export default Employee;
