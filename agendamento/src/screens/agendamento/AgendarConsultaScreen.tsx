import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styles from "./agendar.styles";

// ✅ Configurar o calendário para português
LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

// Dados estáticos
const especialidades = [
  "Clínico Geral",
  "Pediatria",
  "Ginecologia",
  "Dermatologia",
  "Ortopedia",
];

const horarios = ["08:00", "09:30", "11:00", "11:30", "14:00", "16:00"];

export default function AgendarConsultaScreen() {
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  const confirmarAgendamento = () => {
    if (!dataSelecionada || !especialidadeSelecionada || !horarioSelecionado) {
      Alert.alert("Atenção", "Preencha todos os campos para continuar.");
      return;
    }

    Alert.alert(
      "Consulta Agendada",
      `Sua consulta de ${especialidadeSelecionada} foi marcada para ${dataSelecionada} às ${horarioSelecionado}.`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
      <View style={styles.specialtyList}>
        {especialidades.map((item) => (
          <TouchableOpacity
            key={item}
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
        ))}
      </View>

      <Text style={styles.title}>Horários disponíveis</Text>
      <View style={styles.horariosContainer}>
        {horarios.map((hora) => (
          <TouchableOpacity
            key={hora}
            style={[
              styles.horarioItem,
              hora === horarioSelecionado && styles.horarioItemSelecionado,
            ]}
            onPress={() => setHorarioSelecionado(hora)}
          >
            <Text
              style={[
                styles.horarioText,
                hora === horarioSelecionado && styles.horarioTextSelecionado,
              ]}
            >
              {hora}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.botaoConfirmar}
        onPress={confirmarAgendamento}
      >
        <Text style={styles.textoBotaoConfirmar}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
