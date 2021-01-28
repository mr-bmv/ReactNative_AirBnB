import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// import searchResults from '../../../assets/data/search';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow.js";

const DestinationSearchScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Need to Enable it jn billing account og Google developer */}
      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: '',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
