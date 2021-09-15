import React, { useEffect, useState } from "react";
import NavContainer from "./src/routers";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import firebase from "firebase/app";
import { firebaseConfig } from "./src/config";

const FONTS = {
    "Klasik-Regular": require("./assets/fonts/Klasik-Regular.otf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [isFontsReady, fontLoadError] = useFonts(FONTS);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Listen for authentication state to change.
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log("We are authenticated now!");
                const user = firebase.auth().currentUser;
                setUser(user);
            } else {
                console.log("not authenticated now");
                // Do other things
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [firebase]);

    // const getAllItems = async () => {
    //     const keys = await AsyncStorage.getAllKeys();
    //     const result = await AsyncStorage.multiGet(keys);

    //     console.log(JSON.parse(result[0][1]));
    // };

    // useEffect(() => {
    //     getAllItems();
    // }, []);

    if (!isFontsReady) return null;

    if (fontLoadError) console.warn(fontLoadError);

    // if (user) {
    //     return (
    //         <View
    //             style={{
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 flex: 1,
    //             }}
    //         >
    //             <Text>{user.displayName}</Text>
    //             <Text>{user.email}</Text>
    //             <Button
    //                 title="Sign out"
    //                 onPress={() => firebase.auth().signOut()}
    //             />
    //         </View>
    //     );
    // }

    return (
        <SafeAreaProvider>
            <NavContainer />
        </SafeAreaProvider>
    );
}
