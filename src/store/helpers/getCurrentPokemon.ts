import { currentPokemonSlice } from "../reducers/currentPokemon";
import { AppDispatch } from "../store";
import axios from "axios";

export const getCurrentPokemon =
  ({ url }: { url: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(currentPokemonSlice.actions.setCurrentPokemonFetching());
      const response = await axios.get(url);
      dispatch(currentPokemonSlice.actions.setCurrentPokemon(response));
    } catch (error) {
      dispatch(currentPokemonSlice.actions.removeCurrentPokemonFetching());
      throw new Error("Error in getting current pokemon");
    }
  };
