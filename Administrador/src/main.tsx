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
