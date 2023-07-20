import { StyleSheet, View } from 'react-native'
import React from 'react'
import OnBoard3 from './src/screens/OnBoard3'

const App = () => {
  return (
    <View style={styles.container}>
      <OnBoard3/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})