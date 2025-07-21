import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import RootLayout from "../layouts/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export default router;
