import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const client = localStorage.getItem("cliente");

  if (!client) {
    return <Navigate to={"/"} />;
  }

  return children;
};
