import React, {useLayoutEffect} from "react";

import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealItem from "../../components/meal-detail/meals-list/MealItem";
import MealList from "../../components/meal-detail/meals-list/MealList";


const AvailableMeals = ({ route,navigation }) => {

  const catId = route.params.categoryId;

  const mealsToDisplay = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=>category.id== catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  },[catId,navigation]);

  return <MealList items={mealsToDisplay} />
  
};

export default AvailableMeals;

