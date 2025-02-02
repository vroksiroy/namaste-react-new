import { useRouteError } from "react-router"

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>{error.error.message}</p>
        </div>
    )
}
export default Error