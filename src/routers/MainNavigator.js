import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../screens/Main/Homepage";
import { COLORS } from "../utils/theme";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();

// TODO add verification screen logic
const emailVerificationFlag = false;

const HeaderAvatar = () => (
    <Image
        source={require("../../assets/avatars/avatar.png")}
        resizeMode="contain"
        style={{
            width: 44,
            height: 44,
            borderRadius: 22,
        }}
    />
);

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.lightBackground,
                },
                headerShadowVisible: false,
                headerTintColor: COLORS.eclipse,
                headerTitleStyle: {
                    fontFamily: "Manrope-Bold",
                },
            }}
            initialRouteName={Homepage}
        >
            <Stack.Screen
                name="Homepage"
                component={Homepage}
                options={{
                    headerRight: () => <HeaderAvatar />,
                }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;
