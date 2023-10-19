import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children }) {
  const handelPress = () => {
    console.log("Pressed");
  };
  //   android_ripple only works on android devides
  // for IOS devices, styles should be passed as a function , where pressed is true, when it is pressed and false when it is not
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={handelPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressedOpacity]
            : styles.buttonInnerContainer
        }
        // if you want two or more styles classed to be added pass them in an array instead
        // android_ripple={{ color: "#A73121" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#952323",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonPressedOpacity: {
    opacity: 0.75,
  },
});
