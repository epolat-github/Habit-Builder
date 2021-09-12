import React from "react";
import { Text as DefaultText, StyleSheet } from "react-native";
import { COLORS } from "../utils/theme";

const Text = (props) => {
    const { color = COLORS.eclipse, style, children } = props;

    return (
        <DefaultText
            style={[
                styles.text,
                {
                    color,
                    ...style,
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
        fontSize: 18,
        fontFamily: "Manrope-Bold",
        textAlign: "center",
        lineHeight: 27,
    },
});

export default Text;
