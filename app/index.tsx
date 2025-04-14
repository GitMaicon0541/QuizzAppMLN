import { StatusBar, StyleSheet, TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import externalStyles from './styles'; // <-- Renamed to avoid conflict


export default function IndexComponent() {
  const navigation = useNavigation<any>();

  function handleLogin() {
    navigation.navigate('Home'); // Navegar para Home
  }

  return (
    <View style={externalStyles.container}>
      <StatusBar backgroundColor="#670DE5" />
      <Image style={externalStyles.logo} source={require("../assets/logo.png")} />

      <TextInput
        style={externalStyles.input}
        placeholder="Login"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={externalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={externalStyles.button} onPress={handleLogin}>
        <Text style={externalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#670DE5",
    justifyContent: "center",
    alignItems: "center", 
    paddingHorizontal: 20,
  },
  logo: {
    width: 400,
    height: 250,
    resizeMode: "contain",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4B00E0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
