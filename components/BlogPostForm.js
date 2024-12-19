import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function BlogPostForm({ onSubmit, initialValues, isEditable }) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Başlığı Giriniz:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>İçeriği Giriniz:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        style={styles.buttonMain}
        onPress={() => onSubmit(title, content)}
      >
        <View style={styles.buttonView}>
          {isEditable ? (
            <Text style={styles.buttonText}>Güncelle</Text>
          ) : (
            <Text style={styles.buttonText}>Kaydet</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 0,
    backgroundColor: '#874F41',
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
    color: '#fff',
    textShadowColor: "#fff",
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 5,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: "#FBE9D0",
    color: '#000',
    height: '15%',
  },
  buttonMain: {
    padding: 30,
  },
  buttonView: {
    backgroundColor: '#244855',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
