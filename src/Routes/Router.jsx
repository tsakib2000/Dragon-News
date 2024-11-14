import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:'/news',
        element:<div>News Layout</div>
    },
    {
        path : '/auth',
        element:<h1>Login</h1>
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
  ]);

  export  default router