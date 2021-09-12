import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import TextButton from "../../components/TextButton";
import theme, { COLORS } from "../../utils/theme";

const Dot = ({ isActive }) => {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(scale, {
            toValue: isActive ? 1.2 : 1,
            useNativeDriver: false,
        }).start();
    }, [isActive]);

    return (
        <Animated.View
            style={[
                styles.dot,
                {
                    backgroundColor: isActive ? COLORS.eclipse : COLORS.morning,
                    transform: [
                        {
                            scale,
                        },
                    ],
                },
            ]}
        />
    );
};

const PageIndicator = ({
    activeIndex,
    nextPage,
    previousPage,
    skipOnboarding,
    pageCount,
}) => {
    return (
        <View style={styles.pageIndicatorContainer}>
            {activeIndex === 0 ? (
                <TextButton
                    style={{ flex: 0.4 }}
                    title="Skip"
                    onPress={skipOnboarding}
                />
            ) : (
                <TextButton
                    style={{ flex: 0.4 }}
                    title="Previous"
                    onPress={previousPage}
                />
            )}

            <View style={styles.dotContainer}>
                {[...Array(pageCount)].map((_, index) => (
                    <Dot
                        key={`dot-${index}`}
                        isActive={index === activeIndex}
                    />
                ))}
            </View>

            <TextButton style={{ flex: 0.4 }} title="Next" onPress={nextPage} />
        </View>
    );
};

const styles = StyleSheet.create({
    pageIndicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: theme.SCREEN_WIDTH * 0.9,
        flex: 0.1,
    },
    dotContainer: {
        flexDirection: "row",
        flex: 0.2,
        justifyContent: "space-between",
        alignItems: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.morning,
    },
});

export default PageIndicator;
