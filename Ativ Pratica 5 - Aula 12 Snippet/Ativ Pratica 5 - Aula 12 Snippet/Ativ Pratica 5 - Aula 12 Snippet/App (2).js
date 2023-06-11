import React from 'react'
import { StyleSheet,  View, } from 'react-native';
import CriarBotoes from "./src/botoes"

export default function App() {
  return (
    <View style={styles.container}>
      <CriarBotoes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
