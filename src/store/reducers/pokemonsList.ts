import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemonsListItem } from "../types";

export interface IPokemonsList {
  count: number;
  next: string;
  results: IPokemonsListItem[];
}

const initialState: IPokemonsList = {
  count: 0,
  next: "",
  results: [],
};

export const pokemonsListSlice = createSlice({
  name: "pokemonsList",
  initialState,
  reducers: {
    setPokemonsList(state, action: PayloadAction<IPokemonsList>) {
      state.results = action.payload.results;
    },
  },
});

export default pokemonsListSlice.reducer;
