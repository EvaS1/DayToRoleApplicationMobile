import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native'

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.wrapper}>
          {/* <ImageBackground style={styles.container} source={require('../Img/wood.jpg')}> */}
            <Text style={styles.header}>Connexion</Text>        
            <TextInput
                placeholder='Username'
                placeholderTextColor='#292929'
                style={styles.textInput}
                underlineColorAndroid={'transparent'} />
            <TextInput
                placeholder='Password'
                placeholderTextColor='#292929'
                secureTextEntry={true}
                style={styles.textInput}
                underlineColorAndroid={'transparent'} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Connexion</Text>
            </TouchableOpacity>
          {/* </ImageBackground> */}
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
    flex: 1
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10
  },
  header: {
    fontFamily: 'Oswald',
    fontSize: 28,
    color: '#993030',
    marginBottom: 50
  },
  formContainer: {
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 20,
    alignItems: 'center',
    padding: 20
  },
  buttontext: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#13a7af',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
