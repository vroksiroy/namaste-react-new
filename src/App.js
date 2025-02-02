import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"

const RestaurantDetails = lazy(() => import("./components/RestaurantDetails"));

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
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <RestaurantDetails />
                    </Suspense>
                )
            },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)