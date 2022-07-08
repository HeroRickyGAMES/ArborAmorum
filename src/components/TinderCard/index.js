import React from "react";
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

//Programado por HeroRickyGames

const Card = (props) =>{
    const{name, image, bio} = props.user;
    return(
    <View style={styles.card}>
    <ImageBackground 
    source={{
      uri: image
    }}
    style={styles.image}>
      
      <View style={styles.cardInner}>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
      </View>
    </ImageBackground>
    </View>
    );
};
//Estilos
const styles = StyleSheet.create({
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

export default Card;