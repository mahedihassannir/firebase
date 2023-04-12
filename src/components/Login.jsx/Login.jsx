import React, { useState } from 'react';

import { GoogleAuthProvider, getAuth, GithubAuthProvider,signInWithPopup } from "firebase/auth";


import app from '../Firebase';



const Login = () => {
    let [btn, setBtn] = useState(null)
    const auth = getAuth(app);

    let provider = new GoogleAuthProvider();

    let mahedi = () => {

        signInWithPopup(auth, provider)

            .then(result => {
                const user1 = result.user
                console.log(user1);
                setBtn(user1)

            })

            .then(error => {
                console.log('error', error.massage);
            })

    }




    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={mahedi} style={{ padding: "20px 30px" }}>login</button>
            {
                btn && <div>
                    <h1>{btn.displayName}</h1>
                    <h1>{btn.email}</h1>
                    <img src={btn.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;