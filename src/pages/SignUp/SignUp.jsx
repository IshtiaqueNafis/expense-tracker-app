import React, {useState} from 'react';
import './SignUp.css'
import {useDispatch, useSelector} from "react-redux";
import {SignUpUserAsync} from "../../redux/reducers/AuthSliceReducer";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const {error, loading} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(SignUpUserAsync({email, password, displayName}))

    }

    return (
        <form onSubmit={handleSubmit} className={'signup-form'}>
            <h2>sign up</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>display name:</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <button className="btn">Sign up</button>

            {error && <p>{error}</p>}
        </form>
    );
};

export default SignUp;
