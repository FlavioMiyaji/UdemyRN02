import { Meals } from "../../data/dummy-data";
import {
    TOGGLE_FAVORITE,
    SET_FILTERS,
} from "../actions/MealsAction";
import {
    Meal,
    FilerSettings,
} from "../../models";

const initialState: any = {
    meals: Meals,
    filteredMeals: Meals,
    favoriteMeals: [],
};

const MealsReducer: any = (state: any = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            const existingIndex = state.favoriteMeals.findIndex((meal: Meal) => meal.id === action.payload);
            if (existingIndex >= 0) {
                let updatedFavoriteMeals = [...state.favoriteMeals];
                updatedFavoriteMeals.splice(existingIndex, 1);
                // updatedFavoriteMeals = updatedFavoriteMeals.filter((meal: Meal) => meal.id !== payload);
                return {
                    ...state,
                    favoriteMeals: updatedFavoriteMeals,
                };
            }
            const meal = state.meals.find((meal: Meal) => meal.id === action.payload);
            return {
                ...state,
                favoriteMeals: state.favoriteMeals.concat(meal)
            };
        }
        case SET_FILTERS: {
            const appliedFilters: FilerSettings = action.payload;
            const filteredMeals = state.meals.filter((meal: Meal) => {
                if (appliedFilters.glutenFree && !meal.glutenFree) { return false; }
                if (appliedFilters.lactoseFree && !meal.lactoseFree) { return false; }
                if (appliedFilters.vegan && !meal.vegan) { return false; }
                if (appliedFilters.vegetarian && !meal.vegetarian) { return false; }
                return true;
            });
            return {
                ...state,
                filteredMeals,
            };
        }
        default:
            return state;
    }
};

export default MealsReducer;