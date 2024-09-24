import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";

export default function RootLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login/",
        {
          email,
          password,
        }
      );

      if (response.status === 201) {
        alert("Login successful!");
      }
    } catch (error) {
      alert("Login failed.");
    } finally {
      alert("Login process finished.");
    }
  };

  return (
    <View style={{ backgroundColor: "white", padding: 20 }}>
      <Text>Email:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Password:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 20, padding: 5 }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
