import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsDetails from "../Pages/NewsDetails";

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
        path:'/news/:id',
        element:<NewsDetails/>,
        loader:({params})=>fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path : '/auth',
        element:<AuthLayout/>,
        children:[
          {
            path:'/auth/login',
            element:<Login/>
          },
          {
            path:'/auth/register',
            element:<Register/>
          }
        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
  ]);

  export  default router