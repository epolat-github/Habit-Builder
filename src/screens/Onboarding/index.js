import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Animated,
    SafeAreaView,
    StatusBar,
    Platform,
} from "react-native";
import ActionButton from "../../components/ActionButton";
import theme from "../../utils/theme";
import PageIndicator from "./PageIndicator";
import SingleOnboardingScreen from "./SingleOnboardingScreen";

const ONBOARDING_DATA = [
    {
        title: "WELCOME TO MONUMENTAL HABITS",
        image: require("../../../assets/images/onboarding/Onboarding-1.png"),
    },
    {
        title: "CREATE NEW HABIT EASILY",
        image: require("../../../assets/images/onboarding/Onboarding-2.png"),
    },
    {
        title: "KEEP TRACK OF YOUR PROGRESS",
        image: require("../../../assets/images/onboarding/Onboarding-3.png"),
    },
    {
        title: "JOIN TO A SUPPORTIVE COMMUNITY",
        image: require("../../../assets/images/onboarding/Onboarding-4.png"),
    },
];

const Onboarding = () => {
    const [onboardingActiveIndex, setOnboardingActiveIndex] = useState(0);

    const navigation = useNavigation();

    const buttonOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (onboardingActiveIndex !== ONBOARDING_DATA.length - 1) return;

        Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 300,
            delay: 800,
            useNativeDriver: true,
        }).start();
    }, [onboardingActiveIndex]);

    const _nextPage = () => {
        setOnboardingActiveIndex((prev) => prev + 1);
    };

    const _previousPage = () => {
        setOnboardingActiveIndex((prev) => prev - 1);
    };

    const _skipOnboarding = () => {
        setOnboardingActiveIndex(ONBOARDING_DATA.length - 1);
    };

    const _finishOnboarding = async () => {
        navigation.navigate("Login");
        await AsyncStorage.setItem("onboarding", JSON.stringify(false));
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
            />
            <View
                style={[
                    styles.scrollContainer,
                    {
                        transform: [
                            {
                                translateX:
                                    -onboardingActiveIndex * theme.SCREEN_WIDTH,
                            },
                        ],
                    },
                ]}
            >
                {ONBOARDING_DATA.map((onboardingData, index) => (
                    <SingleOnboardingScreen
                        key={`onboarding-screen-${index}`}
                        data={onboardingData}
                        index={index}
                        activeIndex={onboardingActiveIndex}
                    />
                ))}
            </View>
            {onboardingActiveIndex === ONBOARDING_DATA.length - 1 ? (
                <Animated.View
                    style={{
                        opacity: buttonOpacity,
                    }}
                >
                    <ActionButton
                        title="Get Started"
                        style={{
                            marginTop: theme.SPACING * 2,
                        }}
                        onPress={_finishOnboarding}
                    />
                </Animated.View>
            ) : (
                <PageIndicator
                    activeIndex={onboardingActiveIndex}
                    nextPage={_nextPage}
                    previousPage={_previousPage}
                    skipOnboarding={_skipOnboarding}
                    pageCount={ONBOARDING_DATA.length}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    scrollContainer: {
        flexDirection: "row",
        width: theme.SCREEN_WIDTH,
        flex: 0.8,
    },
});

export default Onboarding;
