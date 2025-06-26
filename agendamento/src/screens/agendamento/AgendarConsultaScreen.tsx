import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "./agendar.styles";

const especialidades = [
  "Clínico Geral",
  "Pediatria",
  "Ginecologia",
  "Dermatologia",
  "Ortopedia",
];

export default function AgendarConsultaScreen() {
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a data</Text>

      <Calendar
        onDayPress={(day) => setDataSelecionada(day.dateString)}
        markedDates={{
          [dataSelecionada]: {
            selected: true,
            selectedColor: "#0072c6",
          },
        }}
        style={styles.calendar}
      />

      <Text style={styles.title}>Especialidades disponíveis</Text>

      <FlatList
        data={especialidades}
        keyExtractor={(item) => item}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.specialtyItem,
              item === especialidadeSelecionada && styles.specialtyItemSelected,
            ]}
            onPress={() => setEspecialidadeSelecionada(item)}
          >
            <Text
              style={[
                styles.specialtyText,
                item === especialidadeSelecionada && styles.specialtyTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
