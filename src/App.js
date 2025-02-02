import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import RestaurantDetails from "./components/RestaurantDetails"
import Error from "./components/Error"
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <FooterComponent/> */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails />,
            },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)