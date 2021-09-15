import React, { useRef, useEffect } from "react";
import { Animated, View, Easing } from "react-native";
import Header from "../../components/Header";
import Text from "../../components/Text";
import theme, { COLORS } from "../../utils/theme";

const SingleOnboardingScreen = ({ data, activeIndex, index }) => {
    const { title, image } = data;

    const headerOpacity = useRef(new Animated.Value(0)).current;
    const imageOpacity = useRef(new Animated.Value(0)).current;
    const subtitleOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.stagger(300, [
            Animated.timing(headerOpacity, {
                toValue: activeIndex === index ? 1 : 0,
                useNativeDriver: true,
                easing: Easing.in,
                duration: 300,
            }),
            Animated.timing(imageOpacity, {
                toValue: activeIndex === index ? 1 : 0,
                useNativeDriver: true,
                easing: Easing.in,
                duration: 300,
            }),
            Animated.timing(subtitleOpacity, {
                toValue: activeIndex === index ? 1 : 0,
                easing: Easing.in,
                useNativeDriver: true,
                duration: 300,
            }),
        ]).start();
    }, [activeIndex, index]);

    return (
        <View
            style={{
                alignItems: "center",
                width: theme.SCREEN_WIDTH,
                justifyContent: "space-around",
            }}
        >
            <Animated.View
                style={{
                    opacity: headerOpacity,
                    height: theme.SCREEN_HEIGHT * 0.1,
                    justifyContent: "center",
                }}
            >
                <Header
                    style={{
                        width: theme.SCREEN_WIDTH * 0.9,
                    }}
                >
                    {title}
                </Header>
            </Animated.View>
            <Animated.Image
                style={{
                    opacity: imageOpacity,
                    height: theme.SCREEN_HEIGHT * 0.45,
                }}
                resizeMode="contain"
                source={image}
            />
            <Animated.View
                style={{
                    opacity: subtitleOpacity,
                    height: theme.SCREEN_HEIGHT * 0.1,
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        width: theme.SCREEN_WIDTH * 0.8,
                        textAlign: "center"
                    }}
                >
                    WE CAN <Text color={COLORS.morning}>HELP YOU</Text> TO BE
                    BETTER VERSION OF{" "}
                    <Text color={COLORS.morning}>YOURSELF.</Text>
                </Text>
            </Animated.View>
        </View>
    );
};

export default SingleOnboardingScreen;
