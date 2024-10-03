import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Platform } from "react-native";
const MealItem = ({ title, imgUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mainTile}>
      <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>pressed? styles.pressIos: null}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imgUrl }} style={styles.imgSet} />
          <Text style={styles.mealTitle}>{title}</Text>
          <View style={styles.mealDetails}>
            <Text style={styles.detail}>{duration}min</Text>
            <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
          </View>
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
  mealDetails:{
    flexDirection:'row',
    padding:8,
    alignItems:'center',
    justifyContent:'center'
  },
  detail:{
    marginHorizontal:5,
    fontSize:14,
  },
  pressIos:{
    opacity:0.5,
  }

});
