import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../assets/avatar.jpg";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StyledButton from "../../components/StyledButton/StyledButton";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    paddingBottom: "24px",
  },

  [theme.breakpoints.up("md")]: {
    paddingTop: "100px",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "80%",
  borderRadius: "100%",
  border: `2px solid ${theme.palette.success.light}`,
}));

const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box position="relative" textAlign="center">
                <StyledImage src={Avatar} alt="avatar" />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                textAlign="center"
                variant="h2"
                pb={2}
                sx={{
                  cursor: "default",
                }}
              >
                Giordano Bruno Alencar
              </Typography>
              <Typography
                color="primary.contrastText"
                textAlign="center"
                variant="h2"
                sx={{ cursor: "default" }}
              >
                Front-End Developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                mt="7px"
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadOutlinedIcon sx={{ color: "success.light" }} />
                    <Typography color="primary.contrastText">
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailOutlinedIcon sx={{ color: "success.light" }} />
                    <Typography color="primary.contrastText">
                      Contact Me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
