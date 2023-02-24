import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/HomePage"
import Project from "./pages/ProjectPage"
import LoginPage from "./pages/LoginPage"

const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />, //Parent
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/:id",
        element: <Project />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
