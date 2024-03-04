export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const client = localStorage.getItem("clientCodigo");

  if (!client) {
    return;
  }

  return children;
};
