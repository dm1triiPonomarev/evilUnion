import { Box } from "@mui/material";
import PokemonSelector from "./PokemonSelector";
import PokemonCard from "./PokemonCard";

const PokemonContainer = () => {
  return (
    <Box display={"flex"} height={"500px"} alignItems={"center"}>
      <PokemonSelector />
      <PokemonCard />
    </Box>
  );
};

export default PokemonContainer;
