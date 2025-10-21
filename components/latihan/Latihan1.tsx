import { Text, TextInput, View } from "react-native";
export default function Latihan1() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Aplikasi Data
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
    </View>
  );
}
