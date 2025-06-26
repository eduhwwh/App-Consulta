import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#0072c6",
  },
  calendar: {
    borderRadius: 10,
    elevation: 2,
  },
  list: {
    marginTop: 10,
  },
  specialtyItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#0072c6",
    borderRadius: 8,
    marginBottom: 10,
  },
  specialtyItemSelected: {
    backgroundColor: "#0072c6",
  },
  specialtyText: {
    color: "#0072c6",
    fontSize: 16,
    textAlign: "center",
  },
  specialtyTextSelected: {
    color: "#fff",
  },
});
