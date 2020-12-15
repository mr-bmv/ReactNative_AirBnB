import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles';

const HomeScreen = () => {
  return (
    <View>


      <ImageBackground source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Search bar */}
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn("Search")}>
          <FontAwesome name="search" size={24} color="#eb6864" />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Press')}
        >
          <Text style={styles.buttonText}> Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen;