import React from "react";
import { Outlet, NavLink } from "react-router-dom";


export default function Naving(){
    

    return(
        <nav> 
                <ul className="menu_li">
                    <li>
                    <NavLink className="menu"
                        to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="menu" to="/catbreeds"
                        >Cat Breeds
                        </NavLink>
                    </li>
                </ul>

                 <Outlet />
        </nav>
    )
}