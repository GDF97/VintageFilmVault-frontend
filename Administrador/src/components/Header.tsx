import "../styles/components/Header.scss";

const Header = () => {
  const date = new Date();
  const admName = localStorage.getItem("admNome");

  const dia = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const mes =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const ano = date.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  const diaSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  return (
    <header className="header">
      <div className="header-date">
        <p className="header-date-dia">{dataFormatada}</p>
        <p className="header-date-semana-hora">{diaSemana[date.getDay()]}</p>
      </div>
      <div className="header-adminfo">
        <div>
          <p>{admName}</p>
          <p>Administrador</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
