import React from "react"

import { Link } from 'react-router-dom'
import { useHeaderMenu } from "../model/useHeaderMenu"

export const Header = () => {
    const  menu = useHeaderMenu()

    return (
        <header>
            <nav>
                <ul>
                    {menu.map(item => (
                         <li key={item.path}>
                            <Link to={item.path}>{item.label}</Link>
                         </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}