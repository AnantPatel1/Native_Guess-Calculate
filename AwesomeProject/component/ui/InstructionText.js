import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";
function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}
// passing style as a prop can be done by passing the entire style in an array, now the properties in second part of array here the style will overright the properties in it, if they are same
export default InstructionText;
const styles = StyleSheet.create({
  instruction: {
    fontFamily: "open-sans",
    color: Colors.accentyellowish,
    fontSize: 24,
  },
});
