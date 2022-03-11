import React from 'react';
import {Link} from "react-router-dom";
import  "./NavBar.css"
import {useDispatch, useSelector} from "react-redux";
import {SignOutUserAsync} from "../../redux/reducers/AuthSliceReducer";

const NavBar = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    return (
        <nav className={'navbar'}>
            <ul>
                <li className={'title'}>
                    My Money
                </li>

                {!user && <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>

                </>}


                {user && <button onClick={()=>dispatch(SignOutUserAsync())}>SignOut</button> }
            </ul>

        </nav>
    );
};
export default NavBar;
