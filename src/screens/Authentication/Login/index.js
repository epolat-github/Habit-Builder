import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

import Header from "../../../components/Header";
import SocialLoginSection from "./SocialLoginSection";
import LoginFormSection from "./LoginFormSection";
import theme from "../../../utils/theme";

const Login = () => {
    return (
        <ImageBackground
            source={require("../../../../assets/images/authentication/login-background.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <Animatable.View animation="fadeInUp" useNativeDriver>
                <Header style={styles.header}>
                    WELCOME TO MONUMENTAL HABITS
                </Header>
            </Animatable.View>
            <SocialLoginSection />
            <LoginFormSection />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    header: {
        width: theme.SCREEN_WIDTH * 0.8,
        marginBottom: theme.SPACING * 4,
    },
});

export default Login;
