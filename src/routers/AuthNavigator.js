import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Authentication/Login";

const Stack = createNativeStackNavigator();

const onboardingFlag = false;

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={onboardingFlag ? "Onboarding" : "Login"}
        >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
