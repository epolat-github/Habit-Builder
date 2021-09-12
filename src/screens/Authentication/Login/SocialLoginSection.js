import React from "react";
import * as Animatable from "react-native-animatable";
import ActionButton from "../../../components/ActionButton";
import theme from "../../../utils/theme";
import AntDesign from "@expo/vector-icons/AntDesign";

const SocialLoginSection = () => {
    return (
        <Animatable.View
            animation="fadeInUp"
            useNativeDriver
            delay={100}
            style={{
                marginBottom: theme.SPACING * 2.5,
            }}
        >
            <ActionButton
                title="Continue with Google"
                buttonColor="#fff"
                bold
                textStyle={{ fontSize: 14 }}
                icon={() => <AntDesign name="google" size={24} color="black" />}
            />
        </Animatable.View>
    );
};

export default SocialLoginSection;
