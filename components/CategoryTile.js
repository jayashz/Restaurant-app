import React from "react";
import { Pressable, StyleSheet, Text, Image, ImageBackground } from "react-native";
import { View } from "react-native";
import { Platform } from "react-native";

const CategoryTile = ({ title,onPress, img}) => {
 
  return (
    <View style={[styles.rootContainer]}>
      <Pressable
        style={({pressed})=>[styles.pressableFlex,pressed ? styles.pressIos:null]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
        <ImageBackground source={{uri: img}} style={styles.imgg}/>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 10,
    height: 200,
    elevation: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS=='android'? 'hidden': 'visible',
  },

  pressableFlex: {
    flex: 1,
  },
  pressIos:{
    opacity:0.4
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    overflow:'hidden'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    position:'absolute',
    color:'white'
  },
  imgg:{
    width:'100%',
    height:200,
    objectFit:'cover',
    zIndex:-1,
  }
  
});
