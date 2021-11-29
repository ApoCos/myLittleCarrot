import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Burger() {

    const [showLinks, setShowLinks] = useState(false)
    const active_burger = () => {
        setShowLinks(!showLinks)
    }
    return (
        <div onClick={active_burger} className={`burgerMenu ${showLinks ? "active span" : ""}`}>
            <span></span>
            <nav className={`nav_burger ${showLinks ? "burger-open" : "burger-close"}`}>
            <NavLink exact to  ="/">
                Home
            </NavLink>
            <NavLink exact to  ="/">
                Mon panier
            </NavLink>
            <NavLink exact to  ="/">
                Profil
            </NavLink>
            </nav>
        </div>
    )
}
