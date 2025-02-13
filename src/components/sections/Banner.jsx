import { Box, Container, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box className="section-banner">
      <Container >
        <Box className="text-box">
          <Typography variant="h1" className="heading-primary">
            <Typography component="span" className="heading-primary-main">
              Outdoors
            </Typography>
            <Typography component="span" className="heading-primary-sub">
              is where life happens
            </Typography>
          </Typography>
          <Button variant="contained" href="#">
            Discover our tours
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
