import { Box, Chip } from "@mui/material";
import { useAppDispach, useAppSelcetor } from "../hooks/redux";
import { IPokemonsListItem } from "../store/types";
import { getCurrentPokemon } from "../store/helpers/getCurrentPokemon";

const PokemonSelector = () => {
  const dispatch = useAppDispach();
  const pokemonsList = useAppSelcetor((state) => state.pokemonsList.results);
  const currentPokemon = useAppSelcetor((state) => state.currentPokemon.data);

  const handlePokemonChange = async (pokemon: IPokemonsListItem) => {
    dispatch(getCurrentPokemon({ url: pokemon.url }));
  };

  return (
    <Box display={"flex"} width={"50%"}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "left",
          gap: "10px",
          boxSizing: "border-box",
        }}
      >
        {pokemonsList?.map((pokemon) => (
          <Chip
            key={pokemon.name}
            color="primary"
            sx={{
              color: currentPokemon.name === pokemon.name ? "#FDE791" : "#fff",
              background:
                currentPokemon.name === pokemon.name ? "inherrit" : "#1986EC",
              padding: "20px 8px",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "20px",
              borderRadius: "44px",
              height: "auto",
              boxSizing: "border-box",
              border: "none",
              fontFamily: '"Raleway", sans-serif',
            }}
            onClick={() => handlePokemonChange(pokemon)}
            variant={
              currentPokemon.name === pokemon.name ? "outlined" : "filled"
            }
            label={pokemon.name}
          ></Chip>
        ))}
      </Box>
    </Box>
  );
};

export default PokemonSelector;
