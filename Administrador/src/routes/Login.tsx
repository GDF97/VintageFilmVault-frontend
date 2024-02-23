import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/routes/Login.scss";
import bottomimage from "../assets/bottomimage.png";
import topimage from "../assets/topimage.png";

const Login = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (login: string, senha: string) => {
    const isLogged = await auth.signIn(login, senha);
    console.log(isLogged);

    if (isLogged) {
      navigate("/dashboard");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="container">
      <img src={topimage} alt="" className="topImage" />
      <img src={bottomimage} alt="" className="btnImage" />
      <div className="left">
        <div className="title-wrapper">
          <h1 className="title">VintageFilmVault</h1>
          <p className="subtitle">Dashboard</p>
        </div>
        <div className="form-wrapper">
          <div>
            <p>Usuário</p>
            <input
              type="text"
              onChange={(e) => setUsuario(e.currentTarget.value)}
            />
            {/* {error?.login && <small>{error.login}</small>} */}
          </div>
          <div>
            <p>Senha</p>
            <input
              type="text"
              onChange={(e) => setSenha(e.currentTarget.value)}
            />
            {/* {error?.senha && <small>{error.senha}</small>} */}
          </div>
          <button onClick={() => handleLogin(usuario, senha)}>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
