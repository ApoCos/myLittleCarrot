import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className= "nav">
            <img src="./logo_site.png"></img>
            <div className="menu">
            <NavLink exact to  ="/">
                Home
            </NavLink>
            <NavLink exact to  ="/">
                Mon panier
            </NavLink>
            <NavLink exact to  ="/">
                Profil
            </NavLink>
            </div>
        </div>
    )
}
