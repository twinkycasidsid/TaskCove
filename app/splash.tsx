import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const router = useRouter();

 useEffect(() => {
  Animated.timing(opacity, {
    toValue: 1,
    duration: 1200,
    useNativeDriver: true,
  }).start(() => {
    setTimeout(() => {
router.replace("/login");
    }, 800);
  });
}, []);


  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/taskcove-logo.png")}
        style={[styles.logo, { opacity }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
  },
});
