import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#fff",
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
  specialtyList: {
    marginTop: 10,
    marginBottom: 10,
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
  horariosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  horarioItem: {
    borderColor: "#0072c6",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: "30%",
    alignItems: "center",
  },
  horarioItemSelecionado: {
    backgroundColor: "#0072c6",
  },
  horarioText: {
    color: "#0072c6",
    fontSize: 14,
  },
  horarioTextSelecionado: {
    color: "#fff",
  },
  botaoConfirmar: {
    marginTop: 20,
    backgroundColor: "#0072c6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotaoConfirmar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
