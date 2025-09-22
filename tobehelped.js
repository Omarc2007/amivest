import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CallCategorizations from "./helpeedecidingcalls.js";
import TextCategorizations from "./helpeedecidingtexts.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Help({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose Your Preference</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("CallCategorizations");
        }}
        accessible={true}
        accessibilityLabel="Calling Preference"
        accessibilityHint="Double tap to choose calling-only assignments"
      >
        <Text style={styles.cardText}>Calls Only</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("TextCategorizations");
        }}
        accessible={true}
        accessibilityLabel="Texting Preference"
        accessibilityHint="Double tap to choose texting-only assignments"
      >
        <Text style={styles.cardText}>Texts Only</Text>
      </TouchableOpacity>
    </SafeAreaView>
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