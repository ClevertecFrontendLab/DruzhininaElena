import { Category, FilterState, Recipe } from '~/common/types/types.ts';

import { RootState } from '../store/configure-store.ts';

export const selectAllRecipes = (state: RootState): Recipe[] => state.recipes;
export const selectCategories = (state: RootState): Category[] => state.categories;
export const selectFilters = (state: RootState): FilterState => state.filter;
