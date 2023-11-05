import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Page404Img from "src/assets/404.avif";

const Page404 = () => (
  <Box
    component="main"
    sx={{
      alignItems: "center",
      display: "flex",
      flexGrow: 1,
      minHeight: "100%",
    }}
    style={{ margin: "4rem 0", marginTop: "1rem" }}
  >
    <Container maxWidth="md">
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img
            loading="lazy"
            alt="Page404Img"
            src={Page404Img}
            style={{
              marginTop: 50,
              display: "inline-block",
              maxWidth: "100%",
              width: 400,
            }}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          variant="h3"
          sx={{ fontSize: "1.25rem" }}
        >
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
        <Link to={"/login"}>
          <Button
            component="a"
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go back
          </Button>
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Page404;
