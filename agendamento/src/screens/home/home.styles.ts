import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  calendar: {
    borderRadius: 15,
    marginHorizontal: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    color: "#333",
  },
  taskList: {
    paddingHorizontal: 20,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  taskInfo: {
    flex: 1,
    marginLeft: 10,
  },
  taskText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskSubText: {
    color: "#fff",
    fontSize: 14,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FCEBD5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
