// Tipe.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tipe({ navigation }) {  // 👈 ESSA LINHA É MUITO IMPORTANTE
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Essa é a Tela Tipe!</Text>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} // navigation vai funcionar
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  question: { fontSize: 20, marginBottom: 20 },
  backButton: { backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  backButtonText: { color: 'white', fontWeight: 'bold' },
});
