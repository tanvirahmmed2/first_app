
import {  Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-sky-500 text-6xl font-semibold hover:opacity-20">Welcome</Text>
      
    </SafeAreaView>
  );
}
