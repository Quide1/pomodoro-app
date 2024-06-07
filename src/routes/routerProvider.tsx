import HomePage from "@/pages/home-page";
import { RouterProvider as Provider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
        path:"/my-pomodoro",
        element: <h1>Mis estadísticas</h1>,
    }
  ]);
  
  export const RouterProvider = () => {
    return <Provider router={router} />
  }
  