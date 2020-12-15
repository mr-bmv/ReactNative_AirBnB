import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import Constants from 'expo-constants';

import HomeScreen from './src/screens/Home'
import Post from './src/components/Post';

export default function App() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, }}>
      <StatusBar
        barStyle="dark-content"
      // hidden={true}
      />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post />
      </SafeAreaView>
    </View>
  );
};
