import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";

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
        element:<AuthLayout/>,
        children:[
          {
            path:'/auth/login',
            element:<h1>Log in</h1>
          },
          {
            path:'/auth/register',
            element:<h1>Register</h1>
          }
        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
  ]);

  export  default router