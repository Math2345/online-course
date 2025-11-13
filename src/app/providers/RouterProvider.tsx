import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { CoursesPage } from '../pages/CoursesPage'
import { LoginPage } from '../pages/LoginPage/ui/LoginPage'
import { RegisterPage } from '../pages/RegisterPage/ui/RegisterPage'

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}