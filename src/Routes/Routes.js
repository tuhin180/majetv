import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "shows/:id",
        loader: ({ params }) =>
          fetch(`https://api.tvmaze.com/shows/${params.id}`),
        element: <DetailsPage />,
      },
    ],
  },
]);
export default routes;
