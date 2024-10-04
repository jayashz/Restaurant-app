import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { MEALS } from '../../data/dummy-data';
import MealItem from '../../components/meal-detail/meals-list/MealItem';
import MealList from '../../components/meal-detail/meals-list/MealList';
const Favourites = () => {
    const favIds = useSelector((state)=>state.fav.id);
    const favMeals = MEALS.filter((meal)=>favIds.includes(meal.id));

    
  return <MealList items={favMeals}/>
}

export default Favourites