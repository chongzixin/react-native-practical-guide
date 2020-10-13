import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreens from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreens
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);