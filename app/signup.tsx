import { Link } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConpassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/taskcove-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={username}
        autoCapitalize="none"
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmpassword}
        onChangeText={setConpassword}
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.checkboxContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.conditions}>I agree to the terms and conditions</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Link href={{ pathname: "/login" }} style={styles.loginbtn}>
        Login
      </Link>
            </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 4,
    marginRight: 6,
  },
  conditions: {
    fontSize: 14,
  },
  signupBtn: {
    backgroundColor: "#8FAF8D",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  orText: {
    marginHorizontal: 10,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  footerText: {
    color: "#555",
  },
  loginbtn: {
    color: "#4C72FF",
    fontWeight: "600",
  },
});
