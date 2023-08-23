import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemonsList from "./reducers/pokemonsList";
import currentPokemon from "./reducers/currentPokemon";
const rootReducer = combineReducers({
  pokemonsList,
  currentPokemon,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
