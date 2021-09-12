import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";

const TextButton = ({ title, onPress }) => {
    return (
        <Pressable onPress={onPress}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TextButton;
