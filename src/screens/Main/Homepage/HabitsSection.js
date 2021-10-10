import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../../components/Header";
import Text from "../../../components/Text";
import theme, { COLORS } from "../../../utils/theme";

const HABITS_STATE = [
    {
        name: "Read A Book",
    },
    {
        name: "Exercise",
    },
    {
        name: "Wake Up Early",
    },
    {
        name: "Walk Dog",
    },
];

const CARD_COLORS = [
    COLORS.morning,
    COLORS.sunset,
    COLORS.twilight,
    COLORS.eclipse,
];

const Square = ({ children, backgroundColor = "#fff", style }) => {
    return (
        <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                backgroundColor,
                ...style,
            }}
        >
            {children}
        </View>
    );
};

const DaysRow = ({ selectedDayIndex }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: theme.SCREEN_WIDTH,
                paddingLeft: theme.SPACING * 2,
            }}
        >
            <Text
                bold
                style={{
                    flex: 0.4,
                    textAlign: "center",
                }}
            >
                HABITS
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    flex: 0.6,
                    paddingLeft: theme.SPACING * 2,
                }}
                contentContainerStyle={{
                    paddingRight: theme.SPACING,
                }}
            >
                {Array(20)
                    .fill("")
                    .map((item, index) => (
                        <Square
                            key={`day-${index}`}
                            style={{
                                marginLeft: theme.SPACING,
                            }}
                        >
                            <View
                                style={{
                                    position: "absolute",
                                    top: -1,
                                    width: 15,
                                    height: 3,
                                    borderRadius: 20,
                                    backgroundColor: COLORS.eclipse,
                                    opacity: selectedDayIndex === index ? 1 : 0,
                                }}
                            />
                            <Text
                                bold
                                style={{
                                    fontSize: 13,
                                }}
                            >
                                {20 - index}
                            </Text>
                        </Square>
                    ))}
            </ScrollView>
        </View>
    );
};

const HabitsRows = () => {
    return (
        <ScrollView
            style={{
                paddingLeft: theme.SPACING * 2,
                marginTop: theme.SPACING,
                widtht: theme.SCREEN_WIDTH,
            }}
        >
            {HABITS_STATE.map((habit, habitIndex) => {
                return (
                    <View
                        key={`habit-${habitIndex}`}
                        style={{
                            backgroundColor: "#fff",
                            borderTopLeftRadius: 12,
                            borderBottomLeftRadius: 12,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: theme.SPACING,
                            paddingVertical: theme.SPACING,
                            width: theme.SCREEN_WIDTH,
                        }}
                    >
                        <View
                            style={{
                                flex: 0.4,
                                paddingLeft: theme.SPACING * 2,
                            }}
                        >
                            <Text
                                bold
                                style={{
                                    fontSize: 14,
                                    lineHeight: 18,
                                }}
                            >
                                {habit.name}
                            </Text>
                        </View>
                        <ScrollView
                            horizontal
                            style={{
                                flex: 0.6,
                            }}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingRight: theme.SPACING * 3
                            }}
                        >
                            {Array(20)
                                .fill("")
                                .map((item, index) => (
                                    <Square
                                        key={`item-${index}`}
                                        backgroundColor={COLORS.lightBackground}
                                        style={{
                                            marginLeft: theme.SPACING,
                                        }}
                                    >
                                        <Square
                                            backgroundColor={
                                                CARD_COLORS[habitIndex]
                                            }
                                        />
                                    </Square>
                                ))}
                        </ScrollView>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const HabitsSection = () => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    return (
        <View
            style={{
                marginTop: theme.SPACING * 2,
            }}
        >
            <DaysRow selectedDayIndex={selectedDayIndex} />
            <HabitsRows />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HabitsSection;
