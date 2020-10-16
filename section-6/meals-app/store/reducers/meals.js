import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVOURITE:
            // perform the necessary steps to add/remove meal from favourite meals
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >= 0) {
                // index returns -1 if the item cannot be found, so >= 0 means it can be found and we should proceed to remove it
                // we need to return a new state, so we perform the following steps
                // 1. make a copy of existing favourites, then remove the specified item with splice
                // 2. return a new state by making a copy of all items in existing state, but updating the favouriteMeals object.
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favouriteMeals: updatedFavMeals};
            } else {
                // the item is not inside, so just add it to favourites. start by getting the meal object first
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal)};
            }
        default:
            return state;
    }
};

export default mealsReducer;