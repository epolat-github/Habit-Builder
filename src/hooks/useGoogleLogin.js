import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import firebase from "firebase";
import { googleClientId } from "../config";

const useGoogleLogin = () => {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: googleClientId,
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (response?.type === "success") {
            const { id_token } = response.params;
            const credential =
                firebase.auth.GoogleAuthProvider.credential(id_token);
            firebase
                .auth()
                .signInWithCredential(credential)
                .then((user) => {
                    setSuccess(true), setUser(user);
                })
                .catch((err) => setError(err));
        }
    }, [response]);

    return {
        user,
        login: promptAsync,
        success,
        error,
    };
};

export default useGoogleLogin;
