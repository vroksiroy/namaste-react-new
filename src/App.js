import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <FooterComponent/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)