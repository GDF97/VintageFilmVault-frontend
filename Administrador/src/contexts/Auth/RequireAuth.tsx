import Login from "../../routes/Login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const adm = localStorage.getItem("admCodigo");

  if (!adm) {
    return <Login />;
  }
  return children;
};
