// App.js

import React from 'react';
import Search from './Components/Search';
import Form from './Components/Form'
import {
  StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.wrapper}>
        <ImageBackground style={styles.container} source={require('./Img/wood.jpg')}>
          <Text style={styles.header}>LOGIN</Text>
          <Form />
        </ImageBackground>
      </KeyboardAvoidingView>
      //<Search/>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center'

  },
  header: {
    fontSize: 30,
    color: '#aaa',
    fontWeight: 'bold',
    marginBottom: 50
  }

})
