import React from 'react';
import {Link} from "react-router-dom";
import  "./NavBar.css"

const NavBar = () => {
    return (
        <nav className={'navbar'}>
            <ul>
                <li className={'title'}>
                    My Money
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>

        </nav>
    );
};
export default NavBar;
