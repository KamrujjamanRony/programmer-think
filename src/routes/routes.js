import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import BlogList from "../pages/Dashboard/BlogList";
import AddBlog from "../pages/Dashboard/AddBlog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

export default routes;
