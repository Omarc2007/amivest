import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../App"


export default function Pairs({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pairing...</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        accessible={true}
        accessibilityLabel="Leave the Queue"
        accessibilityHint="Double tap to leave the Queue"
      >
        <Text style={styles.cardText}>Leave Queue</Text>
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