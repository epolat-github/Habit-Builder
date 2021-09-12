import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";

const TextButton = ({ title, onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={style}>
            {({ pressed }) => (
                <Text
                    style={
                        pressed
                            ? {
                                  color: "gray",
                              }
                            : {}
                    }
                >
                    {title}
                </Text>
            )}
        </Pressable>
    );
};

export default TextButton;
