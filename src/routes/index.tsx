import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Paths } from "./paths";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../HOC/PrivateRoute";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import PublicRoute from "../HOC/PublicRoute";

export const router = createHashRouter([
    {
      path: Paths.menu,
      element: <PrivateRoute/>,
      children: [
        {
          index: true,
          element: <Menu/>,
        }
      ]
    },
    {
      path: Paths.profile,
      element: <PrivateRoute/>,
      children: [
        {
          index: true,
          element: <Profile/>,
        }
      ]
    },
    {
      path: Paths.cart,
      element: <PrivateRoute/>,
      children: [
        {
          index: true,
          element: <Cart/>,
        }
      ]
    },
    {
      path: Paths.login,
      element: <PublicRoute/>,
      children: [
        {
          index: true,
          element: <Login/>,
        }
      ]
    },
    {
      path: Paths.register,
      element: <PublicRoute/>,
      children: [
        {
          index: true,
          element: <Register/>,
        }
      ]
    },
  ]);