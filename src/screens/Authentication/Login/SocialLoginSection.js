import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import GoogleSigninButton from "../../../components/GoogleSigninButton";
import theme from "../../../utils/theme";
import useGoogleLogin from "../../../hooks/useGoogleLogin";

const SocialLoginSection = () => {
    const { login, error } = useGoogleLogin();

    useEffect(() => {
        if (error) return alert("Error");
    }, [error]);

    return (
        <Animatable.View
            animation="fadeInUp"
            useNativeDriver
            delay={100}
            style={{
                marginBottom: theme.SPACING * 2.5,
            }}
        >
            <GoogleSigninButton onPress={login} />
        </Animatable.View>
    );
};

export default SocialLoginSection;
