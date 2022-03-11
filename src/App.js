import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
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
