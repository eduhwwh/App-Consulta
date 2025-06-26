import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./home.styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.monthTitle}>VivaClin</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#fff",
          calendarBackground: "#fff",
          selectedDayBackgroundColor: "#2A9D8F",
          selectedDayTextColor: "#fff",
          todayTextColor: "#E76F51",
          arrowColor: "#264653",
          textMonthFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        markedDates={{
          "2025-10-03": { selected: true },
          "2025-10-04": { selected: true },
          "2025-10-08": { marked: true, dotColor: "red" },
          "2025-10-16": { selected: true, selectedColor: "#E76F51" },
          "2025-10-25": { selected: true, selectedColor: "#F4A261" },
        }}
      />

      {/* Goals */}
      <Text style={styles.sectionTitle}>Especialidades</Text>
      <ScrollView style={styles.taskList}>
        <View style={[styles.taskCard, { backgroundColor: "#E76F51" }]}>
          <Feather name="flag" size={20} color="#fff" />
          <View style={styles.taskInfo}>
            <Text style={styles.taskText}>Saude Familiar</Text>
            <Text style={styles.taskSubText}>Today</Text>
          </View>
          <MaterialIcons name="more-vert" size={24} color="#fff" />
        </View>

        <View style={[styles.taskCard, { backgroundColor: "#2A9D8F" }]}>
          <Feather name="flag" size={20} color="#fff" />
          <View style={styles.taskInfo}>
            <Text style={styles.taskText}>Design Meeting</Text>
            <Text style={styles.taskSubText}>Today</Text>
          </View>
          <MaterialIcons name="more-vert" size={24} color="#fff" />
        </View>

        <View style={[styles.taskCard, { backgroundColor: "#F4A261" }]}>
          <Feather name="flag" size={20} color="#fff" />
          <View style={styles.taskInfo}>
            <Text style={styles.taskText}>Design Meeting</Text>
            <Text style={styles.taskSubText}>Today</Text>
          </View>
          <MaterialIcons name="more-vert" size={24} color="#fff" />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <Feather name="home" size={24} color="#333" />
        <Feather name="search" size={24} color="#333" />
        <Feather name="calendar" size={24} color="#333" />
        <Feather name="user" size={24} color="#333" />
      </View>
    </View>
  );
}
