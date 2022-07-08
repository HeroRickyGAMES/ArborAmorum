import React from "react";
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

//Programador por HeroRickyGames

const App = () =>{
    return (
      <View style={styles.pageContainer}>
              <View style={styles.card}>
      <ImageBackground 
      source={{
        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG'
      }}
      style={styles.image}>
        
        <View style={styles.cardInner}>

        <Text style={styles.name}>Jailson</Text>
        <Text style={styles.bio}>Um cara extremamente gay, seus feitos são: Peidar na mão e cherar, cagar na rua e ser gay</Text>
        </View>
      </ImageBackground>
      </View>
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
  cardInner:{
    padding: 20,
  },
  //Text styles
  name: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      marginHorizontal: 10,
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
    marginHorizontal: 10,
  },
})

export default App;