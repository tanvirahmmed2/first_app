import {  Text,  TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Creating first movie app</Text>
      <TouchableOpacity>
        <Text style={{
          backgroundColor: 'black',
          color: 'white',
          width: 100,
          textAlign: 'center'
        }}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
