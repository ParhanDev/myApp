import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          marginBottom: 6,
          marginTop: 12,
        }}
      >
        Name
      </Text>
      <TextInput
        placeholder="isi nama"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#fff",
        }}
      />

      <Text
        style={{
          fontSize: 16,
          marginBottom: 6,
          marginTop: 12,
        }}
      >
        Class
      </Text>
      <TextInput
        placeholder="isi kelas"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#fff",
        }}
      />

      <Text
        style={{
          fontSize: 16,
          marginBottom: 6,
          marginTop: 12,
        }}
      >
        Hobby
      </Text>
      <TextInput
        placeholder="isi hobby"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
}
