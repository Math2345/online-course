import React from "react"
import { menuItems } from "../config/menuItems"
import { Link } from 'react-router-dom'


export const Sidebar = () => {
    return (
        <aside>
            <ul>
                {menuItems.map(item => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}