import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.accentyellowish,
    borderWidth: 2,
    borderColor: Colors.accentyellowish,
    padding: 12,
  },
});
