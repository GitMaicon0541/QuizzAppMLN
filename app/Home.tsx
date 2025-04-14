//import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//import { useNavigation } from '@react-navigation/native';
//import { StackNavigationProp } from '@react-navigation/stack';
//import { RootStackParamList } from './Tipe';
//
//type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
//
//export default function Home() {
//  const navigation = useNavigation<HomeScreenNavigationProp>();
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.text}>Você entrou no Quiz App! 🎉</Text>
//
//<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//  <Text style={styles.backButtonText}>Voltar</Text>
//</TouchableOpacity>
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: "#670DE5",
//    justifyContent: "center",
//    alignItems: "center", 
//    paddingHorizontal: 20,
//  },
//  text: {
//  fontSize: 18,
//  marginBottom: 20,
//  color: '#fff',        // cor branca
//  fontWeight: 'bold',   // deixa em negrito
//},
//
//  backButton: {
//    padding: 10,
//    backgroundColor: '#007BFF',
//    borderRadius: 5,
//  },
//  backButtonText: {
//    color: '#fff',
//    fontWeight: 'bold',
//  },
//});

import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native"; 
// <-- Importa o ScrollView
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './Tipe';
import { RadioButton } from 'react-native-paper';
import { useState } from "react";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questions = [
    {
      id: 'q1',
      text: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Berlim', 'Madri', 'Roma'],
    },
    {
      id: 'q2',
      text: 'Qual o maior planeta do sistema solar?',
      options: ['Terra', 'Júpiter', 'Saturno', 'Vênus', 'Marte'],
    },
    {
      id: 'q3',
      text: 'Quem escreveu "Dom Quixote"?',
      options: ['Cervantes', 'Shakespeare', 'Camões', 'Machado de Assis', 'Dostoiévski'],
    },
    {
      id: 'q4',
      text: 'Qual é o elemento químico representado por "O"?',
      options: ['Ouro', 'Oxigênio', 'Osmio', 'Óxido', 'Ozônio'],
    },
    {
      id: 'q5',
      text: 'Quantos continentes existem?',
      options: ['4', '5', '6', '7', '8'],
    },
  ];

  const handleSelect = (questionId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* ScrollView substitui o View principal */}

      <Text style={styles.title}>Quiz App 🎉</Text>

      {questions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>

          {question.options.map((option) => (
            <TouchableOpacity 
              key={option} 
              style={styles.option}
              onPress={() => handleSelect(question.id, option)}
            >
              <RadioButton
                value={option}
                status={answers[question.id] === option ? 'checked' : 'unchecked'}
                onPress={() => handleSelect(question.id, option)}
                color="#fff"
                uncheckedColor="#ccc"
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity 
        style={styles.resultButton} 
        onPress={() => navigation.navigate('Resultado', { answers } as any)}
      >
        <Text style={styles.resultButtonText}>Ver Pontuação</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#670DE5",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40, // adiciona espaço no final para não cortar
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 25,
    backgroundColor: '#7D2AE8',
    padding: 15,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 14,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  resultButton: {
  marginTop: 10,
  padding: 10,
  backgroundColor: '#28A745',
  borderRadius: 5,
  alignSelf: 'center',
},
resultButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},


});




