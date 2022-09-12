import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { colors } from './src/styles/color';
import Calculator from './src/components/calculator';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.black }]}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
