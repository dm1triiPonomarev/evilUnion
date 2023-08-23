import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICurrentPokemon {
  isLoading: boolean;
  data: {
    id: number;
    height: number;
    name: string;
    sprites: {
      front_shiny: string;
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
    moves: [];
    stats: { base_stat: number }[];
  };
}

const initialState: ICurrentPokemon = {
  isLoading: false,
  data: {
    id: 0,
    height: 0,
    name: "",
    sprites: { front_shiny: "", other: { dream_world: { front_default: "" } } },
    moves: [],
    stats: [{ base_stat: 0 }],
  },
};

export const currentPokemonSlice = createSlice({
  name: "currentPokemon",
  initialState,
  reducers: {
    setCurrentPokemonFetching(state) {
      state.isLoading = true;
    },
    setCurrentPokemon(
      state,
      action: PayloadAction<Pick<ICurrentPokemon, "data">>
    ) {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    removeCurrentPokemonFetching(state) {
      state.isLoading = false;
    },
  },
});

export default currentPokemonSlice.reducer;
