import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const SuggestionRow = ({ item }) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Fontisto name="map-marker-alt" size={24} color="black" />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
)

export default SuggestionRow;
