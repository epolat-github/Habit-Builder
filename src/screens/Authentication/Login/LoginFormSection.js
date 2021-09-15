import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import theme, { COLORS } from "../../../utils/theme";
import { StyleSheet, TextInput, View } from "react-native";
import Text from "../../../components/Text";
import ActionButton from "../../../components/ActionButton";
import TextButton from "../../../components/TextButton";
import { useNavigation } from "@react-navigation/core";
import firebase from "firebase";

const LoginFormSection = () => {
    const { bottom } = useSafeAreaInsets();
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _navigateToSignup = () => navigation.navigate("Signup");

    const _login = async () => {
        if (!email || !password) return;

        try {
            const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);

            console.log("Login success: ", user);
        } catch (err) {
            console.log("Login error code: ", err.code);
            console.log("Login error message: ", err.message);
        }
    };

    return (
        <Animatable.View
            animation="fadeInUp"
            useNativeDriver
            delay={200}
            style={[
                styles.container,
                {
                    paddingBottom: bottom,
                },
            ]}
        >
            <View style={styles.headerContainer}>
                <Text>Log in with email</Text>
            </View>
            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor={COLORS.eclipse}
                    keyboardType="email-address"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.textInput, { marginTop: theme.SPACING }]}
                    placeholder="Password"
                    placeholderTextColor={COLORS.eclipse}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <ActionButton
                title="Login"
                style={styles.loginButton}
                onPress={_login}
            />
            <TextButton
                title="Forgot password?"
                style={{
                    marginTop: theme.SPACING * 1.5,
                }}
                textStyle={{
                    fontSize: 14,
                    textDecorationLine: "underline",
                }}
            />
            <View style={styles.signupContainer}>
                <Text
                    style={{
                        fontSize: 14,
                    }}
                >
                    Don't have an account?
                </Text>
                <TextButton
                    title="Sign up"
                    bold
                    style={{
                        marginLeft: theme.SPACING * 0.75,
                    }}
                    textStyle={{
                        fontSize: 14,
                    }}
                    onPress={_navigateToSignup}
                />
            </View>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: theme.SCREEN_WIDTH,
        alignItems: "center",
    },
    headerContainer: {
        borderBottomColor: COLORS.orange,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: theme.SPACING,
        width: theme.SCREEN_WIDTH,
    },
    inputsContainer: {
        marginTop: theme.SPACING * 1.5,
    },
    textInput: {
        width: theme.SCREEN_WIDTH * 0.9,
        height: 50,
        backgroundColor: COLORS.orange,
        color: COLORS.morning,
        borderRadius: 12,
        paddingHorizontal: theme.SPACING * 2,
    },
    loginButton: {
        marginTop: theme.SPACING * 2,
    },
    signupContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: theme.SPACING * 0.5,
        marginBottom: theme.SPACING,
    },
});

export default LoginFormSection;
