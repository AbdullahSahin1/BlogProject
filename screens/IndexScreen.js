import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import Feather from "@expo/vector-icons/Feather";
export default function IndexScreen() {
  const { state, addBlogPost,deleteBlockPost } = useContext(Context);
  return (
    <View>
      {/* <Text>IndexScreen </Text> */}
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlockPost(item.id)}>
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});
