import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textview}>Eu, Philipe me comprometo a fazer de 2023 o melhor ano da minha vida.</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textview: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    lineHeight: 34
  }
});
