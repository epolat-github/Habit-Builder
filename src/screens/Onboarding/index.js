import React, { useState } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Header from "../../components/Header";
import Text from "../../components/Text";
import TextButton from "../../components/TextButton";
import theme, { COLORS } from "../../utils/theme";
// const OnboardingImage1 = require("../../../assets/images/onboarding/Onboarding-1-removebg.png");

const ONBOARDING_DATA = [
    {
        title: "WELCOME TO MONUMENTAL HABITS",
        image: require("../../../assets/images/onboarding/Onboarding-1-removebg.png"),
    },
    {
        title: "CREATE NEW HABIT EASILY",
        image: require("../../../assets/images/onboarding/Onboarding-1-removebg.png"),
    },
    {
        title: "KEEP TRACK OF YOUR PROGRESS",
        image: require("../../../assets/images/onboarding/Onboarding-1-removebg.png"),
    },
    {
        title: "JOIN A SUPPORTIVE COMMUNITY",
        image: require("../../../assets/images/onboarding/Onboarding-1-removebg.png"),
    },
];

const Dot = ({ isActive }) => (
    <View style={isActive ? styles.activeDot : styles.dot} />
);

const PageIndicator = ({ nextPage, activeIndex }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: theme.SCREEN_WIDTH * 0.8,
                marginTop: theme.SPACING * 5,
            }}
        >
            <TextButton title="Skip" />

            <View
                style={{
                    flexDirection: "row",
                    flex: 0.25,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {ONBOARDING_DATA.map((_, index) => (
                    <Dot
                        key={`dot-${index}`}
                        isActive={index === activeIndex}
                    />
                ))}
            </View>

            <TextButton title="Next" onPress={nextPage} />
        </View>
    );
};

const SingleOnboardingScreen = ({ data }) => {
    const { title, image } = data;

    return (
        <View
            style={{
                alignItems: "center",
                width: theme.SCREEN_WIDTH,
            }}
        >
            <Header>{title}</Header>
            <Image source={image} />
            <Text
                style={{
                    width: theme.SCREEN_WIDTH * 0.9,
                }}
            >
                WE CAN <Text color={COLORS.morning}>HELP YOU</Text> TO BE BETTER
                VERSION OF <Text color={COLORS.morning}>YOURSELF.</Text>
            </Text>
        </View>
    );
};

const Onboarding = () => {
    const [onboardingActiveIndex, setOnboardingActiveIndex] = useState(0);

    const _nextPage = () => {
        setOnboardingActiveIndex((prev) => prev + 1);
    };

    return (
        <View style={styles.container}>
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
                    />
                ))}
            </View>
            <PageIndicator
                activeIndex={onboardingActiveIndex}
                nextPage={_nextPage}
            />
        </View>
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
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.morning,
    },
    activeDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.eclipse,
    },
});

export default Onboarding;
