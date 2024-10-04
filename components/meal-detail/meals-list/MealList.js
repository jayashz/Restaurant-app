import { FlatList,View,StyleSheet } from "react-native";
import MealItem from "./MealItem";
function MealList({items}){
    function renderMeal(data) {
        const item= data.item;
        const mealItemProps = {
          id:item.id,
          title: item.title,
          imgUrl: item.imageUrl,
          duration: item.duration,
          affordability: item.affordability,
          complexity: item.complexity,
        };
        return <MealItem {...mealItemProps} />;
      }
      return (
        <View style={styles.rootContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMeal}
          />
        </View>
      );
}
export default MealList;
const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 16,
    },
  });
  