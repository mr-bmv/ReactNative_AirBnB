import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Search bar */}
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate("Destination Search")}>
          <Fontisto style={{ paddingRight: 10 }} name="search" size={25} color="#f15454" />
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