import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View>
      {/* Belajar text */}
      <Text>Hello farhan</Text>

      {/* Belajar text Input */}
      <TextInput placeholder="Type here to translate" />
    </View>
  );
}
