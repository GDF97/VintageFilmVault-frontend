import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.tsx";
import AllFilms from "./routes/AllFilms.tsx";
import FilmDetails from "./routes/FilmDetails.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import { RequireAuth } from "./contexts/AuthContext/RequireAuth.tsx";
import CartDetails from "./routes/CartDetails.tsx";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider.tsx";
import { CartProvider } from "./contexts/CartContext/CartProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-films",
        element: <AllFilms />,
      },
      {
        path: "/film-details/:id",
        element: <FilmDetails />,
      },
      {
        path: "/cart-details",
        element: (
          <RequireAuth>
            <CartDetails />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
