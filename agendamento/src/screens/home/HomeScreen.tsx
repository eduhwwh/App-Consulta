import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./home.styles";
import { Feather, FontAwesome, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda Saúde RB</Text>
      <Text style={styles.subtitle}>Organização e cuidado com você</Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => router.push("/agendar-consulta")}
      >
        <Feather name="calendar" size={32} color="#fff" />
        <Text style={styles.mainButtonText}>Agendar Consulta</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="user" size={28} color="#fff" />
          <Text style={styles.gridText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Entypo name="help-with-circle" size={28} color="#fff" />
          <Text style={styles.gridText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Entypo name="location-pin" size={28} color="#fff" />
          <Text style={styles.gridText}>Postos{'\n'}Próximos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Entypo name="list" size={28} color="#fff" />
          <Text style={styles.gridText}>Minhas{'\n'}consultas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Copyright 2025 Prefeitura de Rio Branco. Todos os direitos reservados
        </Text>
      </View>
    </View>
  );
}
