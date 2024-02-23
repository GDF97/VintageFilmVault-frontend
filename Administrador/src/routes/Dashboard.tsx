import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  console.log(localStorage.getItem("admCodigo"));

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  const handleLogOut = () => {
    auth.logOut();
    navigate("/");
  };

  return (
    <div>
      <p>navbar</p>
      <p>{auth.adm?.nome}</p>
      <button
        value={"/dashboard"}
        onClick={(e) => handleClick(e.currentTarget.value)}
      >
        Voltar
      </button>
      <button
        value={"/dashboard/cadastrar-filme"}
        onClick={(e) => handleClick(e.currentTarget.value)}
      >
        Cadastrar Filme
      </button>
      <button onClick={handleLogOut}>Sair do Sistema</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
