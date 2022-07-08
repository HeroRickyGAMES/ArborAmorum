import React from "react";
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users'
import Animated, { useSharedValue, 
  useAnimatedStyle, 
  value, 
  withSpring,
  useAnimatedGestureHandler
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

//Programador por HeroRickyGames


const App = () =>{

  const sharedValue = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform:[
      {
        translateX: sharedValue.value * 100,
    }
  ],

  }));

  const gestHandler = useAnimatedGestureHandler({
    onStart: ( ) => {
      console.warn('Começou a tocar!')
    },
    onActive: (event) => {
      console.warn('Tocou para X!', event.translationX)
    },
    onEnd:() =>{
      console.warn('Parou de tocar!')
    }
  });

    return (
      <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
        <Card user={users[0]} />
        </Animated.View>
        </PanGestureHandler>
    </View>
    );
};

//Estilos
const styles = StyleSheet.create({
  //Page container (Estilo da "Activity")
  pageContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  },
  animatedCard: {
    width: '100%', height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;