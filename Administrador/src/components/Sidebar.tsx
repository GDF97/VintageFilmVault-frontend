import { useNavigate } from "react-router-dom";
import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const handlePages = (page: string) => {
    navigate(page);
  };

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">VintageFilmeVault</h1>
      <div className="sidebar-buttons">
        <div className="sidebar-buttons-wrapper">
          <p>Filme</p>
          <button
            value={"/dashboard/cadastrar-filme"}
            onClick={(e) => handlePages(e.currentTarget.value)}
          >
            Cadastrar Filme
          </button>
          <button
            value={"/dashboard/consultar-filmes"}
            onClick={(e) => handlePages(e.currentTarget.value)}
          >
            Consultar Filmes
          </button>
          <button
            value={"/dashboard/cadastrar-filme"}
            onClick={(e) => handlePages(e.currentTarget.value)}
          >
            Alugar Filmes
          </button>
          <button
            value={"/dashboard/cadastrar-filme"}
            onClick={(e) => handlePages(e.currentTarget.value)}
          >
            Devolver Filmes
          </button>
        </div>
        <div className="sidebar-buttons-wrapper">
          <p>Clientes</p>
          <button
            value={"/dashboard/consultar-clientes"}
            onClick={(e) => handlePages(e.currentTarget.value)}
          >
            Consultar Clientes
          </button>
          <button
            value={"/dashboard/consultar-clientes-pendentes"}
            onClick={(e) => handlePages(e.currentTarget.value)}
          >
            Aprovar Clientes
          </button>
        </div>
      </div>
      <button className="btnLogout">Sair do Sistema</button>
    </aside>
  );
};

export default Sidebar;
