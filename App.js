import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EditRecipesScreen from './component/Home/EditRecipesScreen'
import HomeScreen from './component/Home/HomeScreen'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer/rootReducer'

const store = createStore(rootReducer)
const App = () => {
  return (
    <Provider store={store}>
      <EditRecipesScreen/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
