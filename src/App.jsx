import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Nav from "./components/Nav/nav"
import Home from "./pages/HomePage"
import Event from "./pages/EventPage"
import LoginPage from "./pages/LoginPage"
import CreateAccountPage from "./pages/CreateAccountPage"
import CreateEventPage from "./pages/CreateEventPage"
import UpdateEventPage from "./pages/UpdateEventPage"
import NotFoundPage from "./pages/NotFoundPage"

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
        path: "/event/:id",
        element: <Event />,
      },
      {
        path: "/event/:eventId/edit",
        element: <UpdateEventPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "/create-event",
        element: <CreateEventPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
