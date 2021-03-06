import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles.js';

const Post = (props) => {

  const { image, bed, bedroom, type, title, oldPrice, newPrice, totalPrice, id } = props.post;
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: id });
  }

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{ uri: image }}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
        {/* 1 bed 1 bedroom */}
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={3}>
        {type} • {title}
        {/* Lorem • Lorem20 */}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.price}>  ${newPrice} </Text>
        {/* <Text style={styles.oldPrice}>$20</Text> */}
        {/* <Text style={styles.price}>  $15 </Text> */}
        / night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${totalPrice} total</Text>
      {/* <Text style={styles.totalPrice}>$20 total</Text> */}
    </Pressable>

  );
};

export default Post;
