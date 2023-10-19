import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../component/PrimaryButton";
function StartGameScreen() {
  const [enteredNumber, setenteredNumber] = useState("");

  function numberInputHandler(eneteredText) {
    setenteredNumber(eneteredText);
  }
  function resetInputHandler() {
    setenteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    // parseInt either converts or tries to convert a string tot a number
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      // in Alert,alert(), wants three configurations, first on is title, second one is message, and the third one is the configuration that allows us to configure the message that will be part of the alert
      return;
    }
    // isNan means is not a number
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonPress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
// elevation is used to give boxShadow on Android, rest all other 4 Shadow property are used in IOS devices
