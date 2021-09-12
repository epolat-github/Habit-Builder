import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavContainer from "./src/routers";
import { useFonts } from "expo-font";

const FONTS = {
    "Klasik-Regular": require("./assets/fonts/Klasik-Regular.otf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
};

export default function App() {
    const [isFontsReady, fontLoadError] = useFonts(FONTS);

    if (!isFontsReady) return null;

    if (fontLoadError) console.warn(fontLoadError);

    return <NavContainer />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
