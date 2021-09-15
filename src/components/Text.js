import React from "react";
import { Text as DefaultText, StyleSheet } from "react-native";
import { COLORS } from "../utils/theme";

const Text = ({ color = COLORS.eclipse, style, bold = false, children }) => {
    return (
        <DefaultText
            style={[
                styles.text,
                style,
                {
                    color,
                    fontFamily: bold ? "Manrope-Bold" : "Manrope-Medium",
                },
            ]}
        >
            {children}
        </DefaultText>
    );
};

const styles = StyleSheet.create({
    text: {
        color: COLORS.twilight,
        fontSize: 16,
        lineHeight: 26,
    },
});

export default Text;
