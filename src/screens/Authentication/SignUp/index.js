import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import Text from "../../../components/Text";
import Header from "../../../components/Header";
import theme, { COLORS } from "../../../utils/theme";
import ActionButton from "../../../components/ActionButton";
import GoogleSigninButton from "../../../components/GoogleSigninButton";
import TextButton from "../../../components/TextButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import * as Animatable from "react-native-animatable";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import firebase from "firebase";

const SignupForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _signup = async () => {
        if (!email || !password || !name) return;

        try {
            const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            console.log("Signup success: ", user.user);

            // TODO enable the email verification process
            // await firebase.auth().currentUser.sendEmailVerification();
        } catch (err) {
            console.log("Signup error code: ", err.code);
            console.log("Signup error message: ", err.message);
        }
    };

    return (
        <Animatable.View animation="fadeInUp" useNativeDriver delay={100}>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                placeholderTextColor={COLORS.eclipse}
                value={name}
                onChangeText={setName}
                autoCorrect={false}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor={COLORS.eclipse}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor={COLORS.eclipse}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
            />
            <ActionButton
                title="Create Account"
                style={{
                    marginTop: theme.SPACING * 2,
                    marginBottom: theme.SPACING,
                }}
                onPress={_signup}
            />
        </Animatable.View>
    );
};

const SocialSignupSection = () => {
    const { login, error } = useGoogleLogin();

    useEffect(() => {
        if (error) return alert("Error");
    }, [error]);

    return (
        <Animatable.View
            animation="fadeInUp"
            delay={200}
            useNativeDriver
            style={{
                width: theme.SCREEN_WIDTH * 0.9,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    opacity: 0.6,
                    marginBottom: theme.SPACING,
                }}
            >
                <View
                    style={{
                        width: theme.SCREEN_WIDTH * 0.3,
                        backgroundColor: COLORS.eclipse,
                        height: StyleSheet.hairlineWidth,
                    }}
                />
                <Text style={{ fontSize: 14 }}>Or sign in with</Text>
                <View
                    style={{
                        width: theme.SCREEN_WIDTH * 0.3,
                        backgroundColor: COLORS.eclipse,
                        height: StyleSheet.hairlineWidth,
                    }}
                />
            </View>
            <GoogleSigninButton onPress={login} />
        </Animatable.View>
    );
};

const Signup = () => {
    const navigation = useNavigation();

    const _navigateToSignin = () => navigation.navigate("Login");

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.Image
                source={require("../../../../assets/images/authentication/signup-image.png")}
                style={{
                    width: 200,
                    height: 200,
                }}
                resizeMode="contain"
                animation="zoomIn"
                useNativeDriver
            />
            <Animatable.View
                animation="fadeInUp"
                useNativeDriver
                style={{
                    marginTop: theme.SPACING * 2,
                    marginBottom: theme.SPACING,
                }}
            >
                <Header>CREATE YOUR ACCOUNT</Header>
            </Animatable.View>
            <SignupForm />
            <SocialSignupSection />
            <Animatable.View
                animation="fadeInUp"
                delay={300}
                useNativeDriver
                style={{ flexDirection: "row", marginTop: theme.SPACING }}
            >
                <Text style={{ fontSize: 14 }}>Already have an account?</Text>
                <TextButton
                    bold
                    title="Sign in"
                    style={{ marginLeft: theme.SPACING * 0.75 }}
                    textStyle={{ fontSize: 14 }}
                    onPress={_navigateToSignin}
                />
            </Animatable.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.lightBackground,
    },
    textInput: {
        backgroundColor: "#fff",
        color: COLORS.morning,
        width: theme.SCREEN_WIDTH * 0.9,
        height: 50,
        borderRadius: 12,
        paddingHorizontal: theme.SPACING * 2,
        marginTop: theme.SPACING,
    },
});

export default Signup;
