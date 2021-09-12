import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import theme, { COLORS } from "../utils/theme";
import Text from "./Text";

const ActionButton = ({
    title,
    onPress,
    buttonColor = COLORS.morning,
    textColor = COLORS.eclipse,
    style,
    textStyle,
    icon,
    bold = true,
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
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {icon && icon()}
                    <Text
                        color={pressed ? "#6e3f68" : textColor}
                        style={[
                            textStyle,
                            {
                                marginLeft: icon ? theme.SPACING * 2 : 0,
                            },
                        ]}
                        bold={bold}
                    >
                        {title}
                    </Text>
                </View>
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
