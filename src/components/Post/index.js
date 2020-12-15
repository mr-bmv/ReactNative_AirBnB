import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {

  const post = props.post;

  return (
    <View style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMTQoDgeZfxzECUiylW5kbLUBPtAQBfERGQ&usqp=CAU" }}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {/* {post.bed} bed {post.bedroom} bedroom */}
        1 bed 1 bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={3}>
        {/* {post.type}. {post.title} */}
        Lorem • Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi blanditiis magni ducimus repellat nesciunt necessitatibus exercitationem natus, eum culpa?
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        {/* <Text style={styles.oldPrice}>${post.oldPrice}</Text> */}
        {/* <Text style={styles.price}>  ${post.newPrice} </Text> */}
        <Text style={styles.oldPrice}>$20</Text>
        <Text style={styles.price}>  $15 </Text>
        / night
      </Text>

      {/*  Total price */}
      {/* <Text style={styles.totalPrice}>${post.totalPrice} total</Text> */}
      <Text style={styles.totalPrice}>$20 total</Text>
    </View>

  );
};

export default Post;
