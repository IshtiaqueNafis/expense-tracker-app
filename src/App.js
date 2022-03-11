import  React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage/>
                    </Route>

                    <Route exact path={"/login"}>
                        <LogIn/>
                    </Route>


                    <Route exact path={"/signup"}>
                        <SignUp/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
