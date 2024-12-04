import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "./firebase";
import { toast } from 'react-toastify';
import { addUser } from '../store/slices/userSlice';

export const createUserLoginUser = async (isSignIn, email, password, fullName, dispatch) => {
    try {
        let user;
        if (!isSignIn) {
            // Sign up user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            user = userCredential.user;
            await updateProfile(user, {
                displayName: fullName,
            }).then(() => {
                console.log(user, 'user');
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                    addUser({
                        uid,
                        email,
                        displayName,
                    }))
            }).catch((error) => {
                throw error
            });

        } else {
            // Sign in user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            user = userCredential.user;
            console.log(user, 'user');
            toast.success('Sign-In Successful! Welcome back to Netflix.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    } catch (error) {
        console.error('Error during authentication:', error.code, error.message);
        throw error; // Propagate the error to the caller
    }
};
