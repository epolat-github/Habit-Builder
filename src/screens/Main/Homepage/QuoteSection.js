import React, { useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Header from "../../../components/Header";
import Text from "../../../components/Text";
import theme from "../../../utils/theme";

const QUOTE_DATA = [
    {
        quote: "We first make our habits, and then our habits makes us.",
        author: "anonymous",
    },
    {
        quote: "Ambition is the path to success. Persistence is the vehicle you arrive in.",
        author: "Bill Bradley",
    },
    {
        quote: "A young man without ambition is an old man waiting to be.",
        author: "Steven Brust",
    },
    {
        quote: "Big results require big ambitions.",
        author: "Heraclitus",
    },
];

const QUOTE_SECTION_WIDTH = theme.SCREEN_WIDTH * 0.9;
const QuoteSection = () => {
    const quote = useMemo(
        () => QUOTE_DATA[Math.floor(Math.random() * QUOTE_DATA.length)],
        []
    );

    return (
        <View style={styles.container}>
            <View style={styles.quoteWrapper}>
                <Header numberOfLines={5} style={styles.quoteText}>
                    {quote.quote}
                </Header>
                <Text style={styles.authorText}>- {quote.author}</Text>
            </View>
            <Image
                source={require("../../../../assets/images/onboarding/Onboarding-1.png")}
                resizeMode="contain"
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: QUOTE_SECTION_WIDTH,
        marginTop: theme.SPACING * 2,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: theme.SPACING * 2,
        paddingHorizontal: theme.SPACING * 1.5,
        position: "relative",
        overflow: "hidden",
    },
    quoteWrapper: {
        flex: 0.6,
    },
    quoteText: {
        fontSize: 18,
        lineHeight: 18,
        textAlign: "left",
    },
    authorText: {
        textTransform: "uppercase",
        opacity: 0.5,
        fontSize: 14,
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        width: QUOTE_SECTION_WIDTH * 0.5,
        height: 150 * 2,
        zIndex: -1,
    },
});

export default QuoteSection;
