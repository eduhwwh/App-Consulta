import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./login.styles";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo3.png")} // Altere se o logo estiver em outro caminho
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Não tenho conta.{" "}
        <Text
          style={styles.linkText}
          onPress={() => router.push("/cadastro")}
        >
          Criar conta agora.
        </Text>
      </Text>
    </View>
  );
}
