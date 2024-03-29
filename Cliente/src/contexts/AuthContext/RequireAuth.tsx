export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const client = localStorage.getItem("id_cliente");

  if (!client) {
    return;
  }

  return children;
};
