import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
// Navigations Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CallCategorizations from "./AmiVest/helpeedecidingcalls.js";
import TextCategorizations from "./AmiVest/helpeedecidingtexts.js";
import TextCategorization from "./AmiVest/helperdecidingtexts.js";
import CallCategorization from "./AmiVest/helpeedecidingcalls.js";


import Help from "./AmiVest/mainhelper.js"; // Take you to the next page when clicked "Looking for Help"
import Client from "./AmiVest/tobehelped.js";

const Stack = createNativeStackNavigator();

// Home Screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose an Option</Text>

      {/* Card: Need Help */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("Assistance"); // 
        }}
        accessible={true}
        accessibilityLabel="Need help card"
        accessibilityHint="Double tap if you need help"
      >
        <Text style={styles.cardText}>Need Help 🙋</Text>
      </TouchableOpacity>

      {/* Card: Looking to Help */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("Help"); 
        }}
        accessible={true}
        accessibilityLabel="Looking to help card "
        accessibilityHint="Double tap if you want to help someone"
      >
        <Text style={styles.cardText}>Looking to Help 🤝</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// --- App with Navigator ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Assistance" component={Client} />
        <Stack.Screen name="CallCategorization" component={CallCategorization} />
        <Stack.Screen name="TextCategorization" component={TextCategorization} />

        <Stack.Screen name="CallCategorizations" component={CallCategorizations} />  
        <Stack.Screen name="TextCategorizations" component={TextCategorizations} />  


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: "600",
  },
  card: {
    width: 250,
    height: 120,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});