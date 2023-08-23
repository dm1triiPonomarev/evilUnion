import "./App.css";
import { Box } from "@mui/material";
import PokemonHeader from "./components/PokemonHeader";
import PokemonContainer from "./components/PokemonContainer";
import axios from "axios";
import { useAppDispach } from "./hooks/redux";
import { useEffect } from "react";
import { pokemonsListSlice } from "./store/reducers/pokemonsList";

function App() {
  const dispatch = useAppDispach();
  const { setPokemonsList } = pokemonsListSlice.actions;
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => dispatch(setPokemonsList(res.data)));
  }, []);

  return (
    <div style={{ width: "1280px" }}>
      <Box sx={{ padding: "0 150px" }}>
        <PokemonHeader />
        <PokemonContainer />
      </Box>
    </div>
  );
}

export default App;
