import React from "react";
import { Image, moduleName, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";

const GoogleSigninButton = ({ onPress }) => (
    <ActionButton
        title="Continue with Google"
        buttonColor="#fff"
        onPress={onPress}
        bold
        textStyle={{ fontSize: 14 }}
        icon={() => (
            <Image
                source={require("../../assets/icons/google.png")}
                resizeMode="contain"
                width={24}
                height={24}
                style={styles.icon}
            />
        )}
    />
);

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GoogleSigninButton;
