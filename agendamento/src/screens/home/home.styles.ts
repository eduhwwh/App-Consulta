import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0072c6",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 17,
    color: "#555",
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: "#0072c6",
    width: "100%",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
    marginBottom: 30,
  },
  mainButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  gridItem: {
    backgroundColor: "#0072c6",
    width: "47%",
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  gridText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  footer: {
    backgroundColor: "#0072c6",
    padding: 10,
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
