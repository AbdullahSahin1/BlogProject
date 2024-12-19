import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainRow: {
    backgroundColor: "#D9B08C",
   flex: 1,
  },
  row: {
    backgroundColor: "#748D92",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderColor: "gray",
    marginVertical: 20,
    
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
});
