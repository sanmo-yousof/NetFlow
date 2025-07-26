import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import RootLayout from "../layouts/Root";
import NotFound from "../pages/notFound/Notfound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
    errorElement:<NotFound></NotFound>
  },
]);

export default router;
