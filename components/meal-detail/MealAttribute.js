import React from "react";
import { View,Text, StyleSheet } from "react-native";
const MealAttribute = ({duration,complexity,affordability}) => {
  return (
    <View style={styles.mealDetails}>
      <Text style={styles.detail}>{duration}min</Text>
      <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealAttribute;

const styles = StyleSheet.create({
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
});