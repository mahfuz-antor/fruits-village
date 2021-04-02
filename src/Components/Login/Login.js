import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(loggedInUser);

    const handleSignIn = () => {
        // console.log('Sign in click');
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                //   console.log(displayName, photoURL, email);

                // var user = res.user;
                // console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="container">
            <Header></Header>
            {/* <h1>This is Login Page.</h1> */}
            {/* <button className="btn btn-primary" onClick={handleSignIn}>Sign In With Google</button> */}
            {
                user.isSignedIn && <div>
                    <p>Welcome: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            }
            <div className="card-body text-center">
                <h3 className="card-title">This is Login Page.</h3>
                <p className="card-text">You can easily login from here only by google account</p>
                <button className="btn btn-primary" onClick={handleSignIn}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;