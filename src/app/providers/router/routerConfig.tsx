import { createBrowserRouter } from "react-router-dom"

import { MainLayout } from "../../layouts/MainLayout"
import { AuthLayout } from "../../layouts/AuthLayout"

import { HomePage } from "../../../pages/HomePage"
import { CoursesPage } from "../../../pages/CoursesPage"

import { RegisterPage } from "../../../pages/RegisterPage/ui/RegisterPage"
import { LoginPage } from "../../../pages/LoginPage/ui/LoginPage"

import { NotFoundPage } from "../../../pages/NotFoundPage/ui/NotFoundPage"

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true,  element: <HomePage /> },
            { path: "/courses", element: <CoursesPage /> }
        ]
    },

    {
        element: <AuthLayout />,
        children:  [
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> }
        ]

    },

    {
        path: "*",
        element: <NotFoundPage />
    }
])
