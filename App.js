// App.js

import React from 'react';
import Form from './Components/Form'
import Home from './Components/Home'
import Games from './Components/Games'
import Stats from './Components/Stats'
import Account from './Components/Account'
import Settings from './Components/Settings'
import { StyleSheet, Image, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { Container, Header, Content, Button, Icon, Right } from 'native-base';

let isSignedIn = false;
const Drawer = createDrawerNavigator();

function DrawerMenu() {
  let [fontsLoaded] = useFonts({
    'Oswald': require('./assets/fonts/Oswald-Stencil.ttf'),
    'Avenir': require('./assets/fonts/AvenirNextLTPro-Regular.otf')
  });

  function CustomDrawer({...props}) {
    return(
      <Container>
        <Header style={styles.drawer_header}>
        <StatusBar translucent barStyle='dark-content' backgroundColor='transparent'/>
          <Right>
            <Button transparent onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
              <Icon name='close' color='#fff' style={{fontSize: 35}}/>
            </Button>
          </Right>
        </Header>
        <Content>
          <DrawerItemList {...props} />
        </Content>
      </Container>
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {  
    return (
      isSignedIn ? (
        <Drawer.Navigator
          initialRouteName="Mes parties"
          drawerStyle={{
            backgroundColor: '#fff',            
          }}
          drawerContent={
            props => <CustomDrawer{...props} />
          }
          drawerContentOptions={{
            inactiveTintColor: '#993030',
            activeTintColor: '#13a7af',
            activeBackgroundColor: '#fff',
            itemStyle: { 
              borderBottomColor: '#993030', 
              borderBottomWidth: 2,
            },
            labelStyle: {
              fontFamily: "Oswald",
              fontSize: 20,
            },
          }}
        >
        <Drawer.Screen name="Mes parties" component={Games} options={{
          drawerIcon: 
            config => config.focused ?
            <Image style={{ width: 32, height: 32 }} source={require("./Img/play-active.png")}/>
            :
            <Image style={{ width: 32, height: 32 }} source={require("./Img/play.png")}/>
        }}/>
        <Drawer.Screen name="Mes statistiques" component={Stats} options={{
          drawerIcon: 
            config => config.focused ?
            <Image style={{ width: 32, height: 32 }} source={require("./Img/stats-active.png")}/>
            :
            <Image style={{ width: 32, height: 32 }} source={require("./Img/stats.png")}/>
        }}/>
        <Drawer.Screen name="Mon compte" component={Account} options={{
          drawerIcon: 
            config => config.focused ?
            <Image style={{ width: 32, height: 32 }} source={require("./Img/user-active.png")}/>
            :
            <Image style={{ width: 32, height: 32 }} source={require("./Img/user.png")}/>
        }}/>
        <Drawer.Screen name="Paramètres" component={Settings} options={{
          drawerIcon: 
            config => config.focused ?
            <Image style={{ width: 32, height: 32 }} source={require("./Img/settings-active.png")}/>
            :
            <Image style={{ width: 32, height: 32 }} source={require("./Img/settings.png")}/>
        }}/>
        </Drawer.Navigator >
      ) : (
        <Drawer.Navigator
          initialRouteName="Accueil"
          drawerStyle={{
            backgroundColor: '#fff',            
          }}
          drawerContent={
            props => <CustomDrawer{...props} />
          }
          drawerContentOptions={{
            inactiveTintColor: '#993030',
            activeTintColor: '#13a7af',
            activeBackgroundColor: '#fff',
            itemStyle: { 
              borderBottomColor: '#993030', 
              borderBottomWidth: 2,
            },
            labelStyle: {
              fontFamily: "Oswald",
              fontSize: 20,
            },
          }}
        >
          <Drawer.Screen name="Accueil" component={Home} options={{
            drawerIcon: 
              config => config.focused ?
              <Image style={{ width: 32, height: 32 }} source={require("./Img/house-active.png")}/> 
              :
              <Image style={{ width: 32, height: 32 }} source={require("./Img/house.png")}/> 
            }}
          />
          <Drawer.Screen name="Connexion" component={Form} options={{
            drawerIcon: 
              config => config.focused ?
              <Image style={{ width: 32, height: 32 }} source={require("./Img/login-active.png")}/>
              :
              <Image style={{ width: 32, height: 32 }} source={require("./Img/login.png")}/>
            }}
          />
        </Drawer.Navigator >
      )     
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
       <DrawerMenu/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  drawer_header: {
    backgroundColor: '#993030',
  }
})
