import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import Constants from 'expo-constants';

import HomeScreen from './src/screens/Home'
import Post from './src/components/Post';
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

export default function App() {

  return (
    <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
      // hidden={true}
      />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </View>
  );
};
