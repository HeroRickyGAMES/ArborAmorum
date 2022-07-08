import React from "react";
import {View, StyleSheet} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users'
//Programador por HeroRickyGames


const App = () =>{
    return (
      <View style={styles.pageContainer}>
        <Card user={users[0]} />
    </View>
    );
};

//Estilos
const styles = StyleSheet.create({
  //Page container (Estilo da "Activity")
  pageContainer : {justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  },
  //Estilo do cardView
  card: {
    width: '95%', 
    height: '90%',
    backgroundColor: 'red',
    borderRadius: 10, 

        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,

  },
  //Estilo da imagem (Pode ser modificado!)
  image: {
    width: '100%', 
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

  justifyContent: 'flex-end',
  },
  //cardView dentro da imagem
  cardInner:{
    padding: 20,
  },
  //Text styles
  name: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      marginHorizontal: 10,
      paddingBottom: 5,
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
    marginHorizontal: 10,
    paddingBottom: 90,
  },
});

export default App;