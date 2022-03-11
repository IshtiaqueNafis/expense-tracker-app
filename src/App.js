import React, {useEffect} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {projectAuth} from "./firebase/config";
import {checkAuthIsReady} from "./redux/reducers/AuthSliceReducer";

function App() {

    const {authIsReady, user} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(checkAuthIsReady(user));
            }
            unsub();

        })
    }, [dispatch])

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path={"/"}>
                        {!user && <Redirect to={'/login'}/>}
                        {user && <HomePage/>}
                    </Route>

                    <Route path={"/login"}>
                        {!user && <LogIn/>}
                        {user && <Redirect to={'/'}/>}

                    </Route>

                    <Route exact path={"/signup"}>
                        {user && <Redirect to={'/'}/>}
                        {!user && <SignUp/>}

                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
