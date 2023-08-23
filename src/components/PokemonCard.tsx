import { Box, CircularProgress, Typography } from "@mui/material";
import { useAppSelcetor } from "../hooks/redux";

const PokemonCard = () => {
  const currentPokemon = useAppSelcetor((state) => state.currentPokemon.data);
  const currentPokemonPending = useAppSelcetor(
    (state) => state.currentPokemon.isLoading
  );
  return (
    <Box
      width={"50%"}
      sx={{
        backgroundColor: "#000",
        margin: "0 auto",
      }}
      height={"100%"}
    >
      {currentPokemon.name.length <= 0 ? (
        <Box sx={{ margin: "228px 0" }}>
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Who's That Pokémon?
          </p>
        </Box>
      ) : currentPokemonPending ? (
        <div style={{ margin: "228px 0" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Box padding={"44px"}>
            <Box sx={{ maxHeight: "297px", marginBottom: "44px" }}>
              <Typography
                sx={{
                  color: "#A0A0A0",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "48px",
                  textAlign: "left",
                  marginBottom: "44px",
                }}
              >
                {currentPokemon.name[0].toUpperCase() +
                  currentPokemon.name.slice(1)}
              </Typography>
              <img
                // src={currentPokemon.sprites.front_shiny}
                src={currentPokemon.sprites.other.dream_world.front_default}
                style={{ height: "200px", width: "auto" }}
              />
            </Box>

            <Box
              sx={{
                textAlign: "left",
                color: "#A0A0A0",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "17px",
                lineHeight: "25px",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              <p>Снялся в {currentPokemon.moves.length} сериях</p>
              <p>id: {currentPokemon.id}</p>
              <p>heigth: {currentPokemon.height}</p>
              <p>attack: {currentPokemon.stats[1].base_stat}</p>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PokemonCard;
