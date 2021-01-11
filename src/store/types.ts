import { FavoritesState } from './favorites/types';
import { RecipesState } from './recipes/types';
import { UserState } from './user/types';

export interface RootState {
  user: UserState;
  recipes: RecipesState;
  favorites: FavoritesState;
}
