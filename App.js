import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import ListItem from "./app/components/ListItem";
import ListItemSeparator from "./app/components/ListItemSeparator";
import Screen from "./app/components/Screen";
import ListingScreen from "./app/Screens/ListingScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import SignupScreen from "./app/Screens/SignupScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";

export default function App() {
  // var [items, setItems] = useState(initialItems);
  // var [refreshing, setRefreshing] = useState(false);

  // const handleDelete = (item) => {
  //   const filteredList = items.filter((i) => i.id != item.id);
  //   setItems(filteredList);
  // };

  // const renderItems = ({ item }) => (
  //   <ListItem
  //     title={item.name}
  //     subTitle={item.phone}
  //     image={item.image}
  //     onPress={() => alert("Tapped")}
  //     onDelete={() => handleDelete(item)}
  //   />
  // );

  // return <WelcomeScreen />;
  return (
    // <SignupScreen />
    <LoginScreen />
    // <ListingScreen />
    // <Screen>
    // <AppTextInput icon="email" placeholder="Phone" />
    /* <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        ItemSeparatorComponent={() => (
          <ListItemSeparator marginStart={40} marginEnd={40} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setItems([
            {
              id: 5,
              name: "Madhu Yadav",
              phone: "111111111",
              image: "https://www.lorempixel.com/200/200/people/5",
            },
          ]);
        }}
      /> */
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  FlatList: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
