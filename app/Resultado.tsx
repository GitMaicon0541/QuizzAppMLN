import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './Tipe'; // mesmo tipo que você já criou

type ResultadoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Resultado'>;

type RouteParams = {
  answers: { [key: string]: string };
};

export default function Resultado() {
  const route = useRoute();
  const navigation = useNavigation<ResultadoScreenNavigationProp>();
  const { answers } = route.params as RouteParams;

  const questions = [
    {
      id: 'q1',
      text: 'Qual é a capital da França?',
      correctAnswer: 'Paris',
    },
    {
      id: 'q2',
      text: 'Qual o maior planeta do sistema solar?',
      correctAnswer: 'Júpiter',
    },
    {
      id: 'q3',
      text: 'Quem escreveu "Dom Quixote"?',
      correctAnswer: 'Cervantes',
    },
    {
      id: 'q4',
      text: 'Qual é o elemento químico representado por "O"?',
      correctAnswer: 'Oxigênio',
    },
    {
      id: 'q5',
      text: 'Quantos continentes existem?',
      correctAnswer: '7',
    },
  ];

  const pontosPorAcerto = 3;
  let pontuacaoTotal = 0;
  let respostasCorretas = 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resultado 🎯</Text>

      {questions.map((question) => {
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;

        if (isCorrect) {
          pontuacaoTotal += pontosPorAcerto;
          respostasCorretas++;
        }

        return (
          <View key={question.id} style={styles.resultContainer}>
            <Text style={styles.questionText}>{question.text}</Text>
            <Text style={[styles.answerText, { color: isCorrect ? 'lightgreen' : 'red' }]}>
              Sua resposta: {userAnswer || "Não respondida"}
            </Text>
            <Text style={styles.correctAnswerText}>Resposta correta: {question.correctAnswer}</Text>
          </View>
        );
      })}

      <Text style={styles.scoreText}>Pontuação total: {pontuacaoTotal} pontos</Text>

      {/* Verifica se o número de respostas corretas é maior que 2 */}
      {respostasCorretas > 2 && (
        <Text style={styles.congratsText}>PARABÉNS PELO RESULTADO!!! 🎉</Text>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#670DE5",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultContainer: {
    backgroundColor: '#7D2AE8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answerText: {
    fontSize: 14,
    marginBottom: 3,
  },
  correctAnswerText: {
    fontSize: 12,
    color: '#ccc',
  },
  scoreText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  congratsText: {
    fontSize: 20,
    color: 'lightgreen',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  backButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
