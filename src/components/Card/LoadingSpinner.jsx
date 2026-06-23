import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", // ← Take full height of parent
        width: "100%", // ← Take full width of parent
      }}
    >
      <CircularProgress aria-label="Loading…" size={50} />
    </Box>
  );
}
