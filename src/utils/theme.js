import { Dimensions } from "react-native";

export const COLORS = {
    sunset: "#F65B4E",
    twilight: "#29319F",
    morning: "#FFBA7C",
    fog: "#FFDEEF",
    eclipse: "#573353",
};

const { height, width } = Dimensions.get("screen");

export default {
    SPACING: 10,
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
};
