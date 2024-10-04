import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealAttribute from "../components/meal-detail/MealAttribute";
import Subtitle from "../components/meal-detail/Subtitle";

const MealDetail = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  const mealAttribute = {
    duration: selectedMeal.duration,
    affordability: selectedMeal.affordability,
    complexity: selectedMeal.complexity,
  };
  return (
    <View>
      <Image style={styles.img} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealAttribute {...mealAttribute} />
      </View>
      <Subtitle>INGREDIENTS</Subtitle>
      {selectedMeal.ingredients.map((ingred) => (
        <Text key={ingred}>{ingred}</Text>
      ))}
      <Subtitle>STEPS</Subtitle>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
    fontSize:20
  },
});
