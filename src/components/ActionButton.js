import React from "react";
import { StyleSheet, Pressable } from "react-native";
import theme, { COLORS } from "../utils/theme";
import Text from "./Text";

const ActionButton = ({
    title,
    onPress,
    buttonColor = COLORS.morning,
    textColor = COLORS.eclipse,
    style,
}) => {
    return (
        <Pressable
            style={[
                styles.actionButton,
                {
                    backgroundColor: buttonColor,
                    ...style,
                },
            ]}
            onPress={onPress}
        >
            {({ pressed }) => (
                <Text color={pressed ? "gray" : textColor}>{title}</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    actionButton: {
        width: theme.SCREEN_WIDTH * 0.9,
        paddingVertical: theme.SPACING * 1.5,
        borderRadius: 8,
    },
});

export default ActionButton;
