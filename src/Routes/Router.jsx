import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home";
import CategoryNews from "../Pages/CategoryNews";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
          path:'/',
          element:<Navigate to={'/category/01'}></Navigate>
        },
        {
          path:'/category/:id',
          element: <CategoryNews/>,
          loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
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