import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function GameScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menu_icon} source={require('../Img/menu.png')}/>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../Img/logo.png')}/>
                <TouchableOpacity /* onPress={() => navigation.navigate('Aide')} */>
                    <Image style={styles.help_icon} source={require('../Img/help.png')}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Game</Text> 
        </View>
            );


    }

export default class Game extends React.Component {
        render(){
            return(
                <Stack.Navigator 
                  initialRouteName='Game' 
                  screenOptions={{
                    headerShown: false
                  }}>
                  <Stack.Screen 
                  name="Game" 
                  component={GameScreen}         
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
        header_container: {
            flex: 1,
            width: '100%', 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
        },
        menu_icon: {
            width: 40,
            resizeMode: 'contain'
        },
        logo: {
          marginTop: 50,
          marginBottom: 20,
          width: 130,
          resizeMode: 'contain'
        },
        help_icon: {
            width: 40,
            resizeMode: 'contain'
        },
        main_container: {
          flex: 4,
          marginBottom: 20,
          textAlign: 'center',
        }
    })      