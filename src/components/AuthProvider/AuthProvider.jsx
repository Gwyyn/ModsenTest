import {getAuth, signInWithPopup} from "firebase/auth"
import {app, googleAuthProvider} from "../utilItems/firebase"

import React, {useEffect, useState} from 'react';

const AuthProvider = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                return setUser(maybeUser)
            }

            signInWithPopup(auth, googleAuthProvider).then(credentials =>
                setUser(credentials.user)
            ).catch((e) => console.error(e))
        });

        return unsub
    }, [auth])

    return user != null ? <>{user.displayName}</> : <>loading</>;

};

export default AuthProvider;