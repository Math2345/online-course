
import { RouterProvider as Provider } from "react-router-dom"
import { routerConfig }  from "./routerConfig"

export const RouterProvider = () => {
    return <Provider router={routerConfig} />
}