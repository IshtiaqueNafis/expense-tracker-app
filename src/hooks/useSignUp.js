import {useState} from "react";
import {projectAuth} from "../firebase/config";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signUp = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);
        try {
          const res=  await projectAuth.createUserWithEmailAndPassword(email, password);

            if(!res) {
                throw new Error('could not complete sign up')
            }

            // add display name to user.

            await res.user.updateProfile({displayName});
            setIsPending(false);
            setError(null);

        } catch (e) {
            console.log(e);
            setError(e.message);
            setIsPending(false);
        }
    }

    return {error, isPending, signUp}

}