import { Box, Typography } from "@mui/material";
import cursorImg from "../assets/cursor.png";
const PokemonHeader = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ marginBottom: "54px" }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "12px",
          border: " 1px solid #FFFFFF",
          padding: "7px",
          fontFamily: '"Raleway", sans-serif',
        }}
      >
        ПОКЕМОНЫ API
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img style={{ maxWidth: "25px" }} src={cursorImg} />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "12px",
            textAlign: "left",
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          Нажмите на <br /> нужного покемона
        </Typography>
      </Box>
    </Box>
  );
};

export default PokemonHeader;
