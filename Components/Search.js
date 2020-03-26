// Components/Search.js
import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      // Ici on rend à l'écran les éléments graphiques de notre component custom Search
      <View>
        <TextInput placeholder='Titre du jeu'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }

}
export default Search
