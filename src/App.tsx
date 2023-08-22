import "./App.css";
import { Box, Typography } from "@mui/material";
import cursorImg from "./assets/cursor.png";

function App() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res) => res.json())
    .then((res) => console.log(res));

  return (
    <Box style={{ width: "1280px" }}>
      <Box sx={{ padding: "0 150px" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ marginBottom: "54px" }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "13.52px",
              border: " 1px solid #FFFFFF",
              padding: "7px",
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
              }}
            >
              Нажмите на <br /> нужного покемона
            </Typography>
          </Box>
        </Box>

        <Box>
          <div>;;s;s;s;s</div>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
