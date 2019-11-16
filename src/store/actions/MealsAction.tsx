import { FilerSettings } from "../../models";

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = ({ mealId }: any) => {
    return { type: TOGGLE_FAVORITE, payload: mealId };
};

export const setFilters = (filterSettings: FilerSettings) => {
    return { type: SET_FILTERS, payload: filterSettings };
};
