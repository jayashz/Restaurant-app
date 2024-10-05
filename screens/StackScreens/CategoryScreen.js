import { CATEGORIES } from "../../data/dummy-data";
import CategoryTile from "../../components/CategoryTile";
import { FlatList } from "react-native";


function CategoryScreen({ navigation }) {
  function renderCategories(data) {
    function pressHandler() {
        navigation.navigate('Available-meals',{
          categoryId: data.item.id,
        });
    }
    
    return (
      <CategoryTile
        title={data.item.title}
        color={data.item.color}
        img={data.item.img}
        onPress={pressHandler}
      />
    );
  }
  
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategories}
    />
  );
}
export default CategoryScreen;
