import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.formContainer}>
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
                <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>



    )
  }
}

const styles = StyleSheet.create({
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
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
  buttontext: {
    color: '#292929',
    fontSize: 16
  }
})
