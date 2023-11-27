import { vars } from "nativewind";
import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";

const theme = vars({
  "--theme-fg": "red",
});

const App = () => {
  return (
    <View className="flex-1 items-center justify-center" style={theme}>
      <Text className="font-bold text-[--theme-fg]">Variables!</Text>
      <Text className="font-bold active:scale-150 active:text-[--theme-fg] transition duration-[500ms]">
        Transitions
      </Text>
      <Text className="font-bold animate-bounce placeholder:text-white">
        Animations
      </Text>
      <Image source={require("../../assets/Instagram.png")} />
      <Image
        source={require("../../assets/Instagram.png")}
        className="h-5 w-5"
      />
      <Image
        source={require("../../assets/Instagram.png")}
        style={{
          height: 20,
          width: 20,
        }}
      />
    </View>
  );
};

export default App;
