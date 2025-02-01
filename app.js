/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

const heading = React.createElement("h1", {}, "Hello world from React")
const heading1 = React.createElement("h1", {}, "Hello world from React")
const child = React.createElement("div", { id:"child" }, [heading, heading1])
const parent = React.createElement("div", { id: "parent" }, child)

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)