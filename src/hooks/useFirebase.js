import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, sendEmailVerification, GithubAuthProvider } from "firebase/auth";

const useFirebase = () => {
    initializeAuthentication();

    // states 
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const auth = getAuth();
    // providers
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // input 
    const userName = e => {
        setName(e.target.value);
    }
    const userEmail = e => {
        setEmail(e.target.value);
    }
    const userPassword = e => {
        setPassword(e.target.value);
    }

    // handlersssss
    const logInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // user name 

    const userDisplayname = () => {

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const handaleSignUp = () => {

        if (password.length < 6) {
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    userDisplayname();
                    setUser(result.user);
                    varificationEmail();
                })
        }
    }

    // git hub 
    const handleGitHubSing = () => {
        setIsLoading(true)
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                // const { displayName, photoURL, email } = result.user;
                // console.log(user);
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    // email varification 
    const varificationEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // console.log(result);
            })
    }
    // log out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        logOut,
        isLoading,
        logInWithGoogle,
        userPassword,
        userEmail,
        userName,
        handaleSignUp,
        userDisplayname,
        handleGitHubSing

    }
}

export default useFirebase;