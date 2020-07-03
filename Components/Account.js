import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AccountScreen({navigation}) {
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
          <View style={styles.main_container}>
            <Text style={styles.title1}>Mon compte</Text>
          </View>                  
        </View>
    );
}

export default class Account extends React.Component {
    render(){
        return(
            <Stack.Navigator 
              initialRouteName='Mon compte' 
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen 
              name="Mon compte" 
              component={AccountScreen}         
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
      marginLeft: 10,
      marginRight: 10,
    },
    header_container: {
        flex: 1,
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 20,
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
      textAlign: 'center',
    },
    title1: {
      fontFamily: 'Oswald',
      fontSize: 28,
      color: '#993030',
    }
})