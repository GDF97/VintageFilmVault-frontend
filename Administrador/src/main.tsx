import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import { AuthProvider } from "./contexts/Auth/AuthProvider.tsx";
import CadastrarFilme from "./routes/[dashboard]/CadastrarFilme.tsx";
import { RequireAuth } from "./contexts/Auth/RequireAuth.tsx";
import ConsultarFilmes from "./routes/[dashboard]/ConsultarFilmes.tsx";
import ConsultarClientesPendentes from "./routes/[dashboard]/ConsultarClientesPendentes.tsx";
import ConsultarClientes from "./routes/[dashboard]/ConsultarClientes.tsx";
import DevolverFilme from "./routes/[dashboard]/DevolverFilme.tsx";
import AlugarFilme from "./routes/[dashboard]/AlugarFilme.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "/dashboard/cadastrar-filme",
        element: <CadastrarFilme />,
      },
      {
        path: "/dashboard/consultar-filmes",
        element: <ConsultarFilmes />,
      },
      {
        path: "/dashboard/consultar-clientes-pendentes",
        element: <ConsultarClientesPendentes />,
      },
      {
        path: "/dashboard/consultar-clientes",
        element: <ConsultarClientes />,
      },
      {
        path: "/dashboard/devolver-filmes",
        element: <DevolverFilme />,
      },
      {
        path: "/dashboard/alugar-filme",
        element: <AlugarFilme />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
