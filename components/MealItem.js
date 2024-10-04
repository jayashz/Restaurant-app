import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealAttribute from "./meal-detail/MealAttribute";
const MealItem = ({ title, imgUrl, duration, complexity, affordability, id }) => {
  const navigation = useNavigation();
  function pressHandler(){
    navigation.navigate('Meal-details',{
      mealId:id,
    });
  }
  const mealAttributes={
    duration:duration,
    affordability:affordability,
    complexity:complexity
  };
  return (
    <View style={styles.mainTile}>
      <Pressable o android_ripple={{color:'#ccc'}} style={({pressed})=>pressed? styles.pressIos: null} onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imgUrl }} style={styles.imgSet} />
          <Text style={styles.mealTitle}>{title}</Text>
          <MealAttribute {...mealAttributes} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mainTile: {
    margin:16,
    borderRadius:8,
    overflow:Platform.OS=='android'? 'hidden': 'visible',
    backgroundColor:'white',
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  innerContainer:{
    overflow:'hidden',
    borderRadius:8,
  },
  imgSet: {
    width:'100%',
    height:200,
    objectFit:'cover'

  },
  mealTitle:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    margin:8
  },
  
  pressIos:{
    opacity:0.5,
  }

});
