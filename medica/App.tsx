import { StyleSheet, View } from 'react-native'
import React from 'react'
import OnBoard1 from './src/screens/OnBoard1'

const App = () => {
  return (
    <View style={styles.container}>
      <OnBoard1/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})