import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../Config/Colors";
import AppText from "./AppText";

function Card({ title, price, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    color: Colors.SecondaryColor,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  title: {
    fontSize: 17,
  },
});

export default Card;
