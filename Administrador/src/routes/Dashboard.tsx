import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import "../styles/routes/Dashboard.scss";
import Header from "../components/Header.tsx";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  console.log(localStorage.getItem("admCodigo"));

  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
