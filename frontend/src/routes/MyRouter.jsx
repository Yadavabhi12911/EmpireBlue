import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import SingleBlog from "../components/SingleBlog";
import Layout from "../components/Layout";
import { SignIn} from '../components/SignIn'
import { SignUp} from '../components/SignUp'
import NotFound from "../components/NotFound";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
       path: "*", 
        element: <NotFound/>
      },
    ],
  },
]);
