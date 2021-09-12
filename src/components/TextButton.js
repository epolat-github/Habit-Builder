import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";

const TextButton = ({ title, onPress, style, bold, textStyle }) => {
    return (
        <Pressable onPress={onPress} style={style}>
            {({ pressed }) => (
                <Text
                    bold={bold}
                    color={pressed ? "gray" : undefined}
                    style={textStyle}
                >
                    {title}
                </Text>
            )}
        </Pressable>
    );
};

export default TextButton;
