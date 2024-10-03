import React, {useEffect} from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const AvailableMeals = ({ route,navigation }) => {

  const catId = route.params.categoryId;
  const mealsToDisplay = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );
  useEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=>category.id== catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  },[catId,navigation])
  function renderMeal(data) {
    const mealItemProps = {
      title: data.item.title,
      imgUrl: data.item.imageUrl,
      duration: data.item.duration,
      affordability: data.item.affordability,
      complexity: data.item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}

      />
    </View>
  );
};

export default AvailableMeals;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
