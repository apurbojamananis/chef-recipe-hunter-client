import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Chefs from "../Pages/Chefs/Chefs";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRoute from "../providers/PrivateRoute";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b710-chef-recipe-hunter-server-side-apurbojamananis.vercel.app/recipe/${params.id}`
          ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
    ],
  },
  {
    path: "home",
    element: <Main></Main>,
    loader: () =>
      fetch(
        "https://b710-chef-recipe-hunter-server-side-apurbojamananis.vercel.app/data"
      ),
  },
]);

export default router;
