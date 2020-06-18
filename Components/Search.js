// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      // Ici on rend à l'écran les éléments graphiques de notre component custom Search
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du jeu'/>
        <Button title='Rechercher' onPress={() => {}}/>
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30
  },
  textinput: {
     marginLeft: 5,
     marginRight: 5,
     height: 50,
     borderColor:'#000000',
     borderWidth: 1,
     paddingLeft: 5
  }
})
export default Search
