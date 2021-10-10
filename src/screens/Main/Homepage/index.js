import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import theme, { COLORS } from "../../../utils/theme";
import { StatusBar } from "expo-status-bar";
import QuoteSection from "./QuoteSection";
import HabitsSection from "./HabitsSection";

const Homepage = () => {
    return (
        <ImageBackground
            source={require("../../../../assets/images/homepage/background.png")}
            resizeMode="cover"
            style={styles.container}
            imageStyle={{
                width: theme.SCREEN_WIDTH,
                marginTop: theme.SCREEN_HEIGHT * 0.3,
            }}
        >
            <StatusBar style="dark" />

            {/* QUOTE SECTION */}
            <QuoteSection />

            {/* HABITS SECTION */}
            <HabitsSection />

            {/* TABBAR SECTION */}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.lightBackground,
    },
});

export default Homepage;
