import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../Img/logo.png')}/>
      <View style={styles.text_container}>
        <Text style={styles.title1}>Bienvenue sur Day To Role</Text>
        <Text style={styles.subtitle}>Le Jeu de Rôle n'a jamais été aussi facile !</Text>
      </View>          
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Connexion')}>
            <Text style={styles.buttontext}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /* onPress={() => navigation.navigate('Inscription')} */>
            <Text style={styles.buttontext}>Inscription</Text>
        </TouchableOpacity>
      </View>          
    </View>
  );
}

export default class Home extends React.Component {
  render() {
    return(
      <Stack.Navigator 
        initialRouteName='Accueil' 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen 
        name="Accueil" 
        component={HomeScreen}         
        />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 20,
  },
  logo: {
    flex: 1,
    marginTop: 50,
    marginBottom: 20,
    width: 200,
    resizeMode: 'contain'
  },
  text_container: {
    flex: 0.5,
    textAlign: 'center',
  },
  title1: {
    fontFamily: 'Oswald',
    fontSize: 28,
    color: '#993030',
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 17,
    color: '#13a7af',
  },
  button_container: {
    flex: 1,
    marginTop: 20,
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
});
