import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../utils/theme";

const Header = (props) => {
    const { children, color = COLORS.eclipse, style } = props;

    return (
        <Text
            style={[
                styles.headerStyle,
                {
                    color,
                    ...style,
                },
            ]}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontFamily: "Klasik-Regular",
        fontSize: 28,
        color: "#000",
        textAlign: "center",
        lineHeight: 32,
    },
});

export default Header;
