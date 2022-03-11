import React, {useState} from 'react';
import './SignUp.css'
import {useSignUp} from "../../hooks/useSignUp";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const {signUp, isPending, error} = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signUp(email, password, displayName)
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
            {!isPending && <button className="btn">Sign up</button>}
            {isPending && <button className="btn" disabled>loading</button>}
            {error && <p>{error}</p>}
        </form>
    );
};

export default SignUp;
