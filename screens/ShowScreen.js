import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);
  console.log(route.params.id);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Başlık</Text>
        <Text style={styles.content}>{blogPost.title}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>İçerik</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EAE7DC', 
  },
  container: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#2F4454', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, 
  },
  label: {
    fontSize: 18,
    fontWeight: '700', 
    color: '#fff', 
    marginBottom: 10,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    color: '#fff', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    flex: 1, 
    marginRight: 8, 
  },
  icon: {
    padding: 8,
  },
});
