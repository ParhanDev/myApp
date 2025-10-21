import { Button, Text, TextInput, View } from "react-native";
export default function LoginScreen() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e4e4ff",
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Login
      </Text>
      <View
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginBottom: 6,
            marginTop: 12,
          }}
        >
          Email:
        </Text>
        <TextInput
          placeholder="isi email"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            backgroundColor: "#fff",
            color: "grey",
          }}
        />

        <Text
          style={{
            fontSize: 16,
            marginBottom: 6,
            marginTop: 12,
          }}
        >
          Password:
        </Text>
        <TextInput
          placeholder="isi password"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            backgroundColor: "#fff",
            color: "grey",
            marginBottom: 20,
          }}
        />
        <Button title="Login"></Button>
      </View>
    </View>
  );
}
