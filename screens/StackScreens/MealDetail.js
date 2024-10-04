import React,{useLayoutEffect} from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealAttribute from "../../components/meal-detail/MealAttribute";
import Subtitle from "../../components/meal-detail/Subtitle";
import List from "../../components/meal-detail/List";
import IconBtn from "../../components/meal-detail/IconBtn";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite,removeFavourite } from "../../store/favourites";
const MealDetail = ({ route,navigation }) => {
  const mealId = route.params.mealId;
  const dispatch = useDispatch();
  const favouriteMealIds = useSelector((state)=>state.fav.id);
  const isMealFav = favouriteMealIds.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  const mealAttribute = {
    duration: selectedMeal.duration,
    affordability: selectedMeal.affordability,
    complexity: selectedMeal.complexity,
  };
  function headerBtnPressHandler(){
    if(isMealFav){
      dispatch(removeFavourite({id:mealId}));
    }
    else{
      dispatch(addFavourite({id:mealId}));
    }
    
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>{
        return <IconBtn title='tap' color={isMealFav ? 'red': 'white'} onPress={headerBtnPressHandler}/>
      }
    })
  },[navigation,headerBtnPressHandler])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.img} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <View>
        <MealAttribute {...mealAttribute} />
      </View>

    <View>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer} >
          <Subtitle>INGREDIENTS</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>STEPS</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </View>

    </ScrollView>
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
    fontSize: 20,
  },
  rootContainer:{
    marginBottom:20,
  },
  outerContainer:{
    alignItems:'center',

  },
  innerContainer:{
    width:'80%',

  }
});
