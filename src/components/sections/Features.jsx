import { Box, Container, Grid, Typography } from '@mui/material';
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const Features = () => {
  return (
    <Box component="section" id="features" className="section-features">
      <Container className="container">
        <Grid container className="row">
          <Grid item xs={12} sm={6} md={4} lg={3} className="card">
            {/* <LanguageOutlinedIcon className="card-icon" /> */}
            <Box component="i" className="card-icon icon-basic-world"></Box>
            <Typography variant="h6" component="h6">
              Explore the world
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="card">
            {/* <ExploreOutlinedIcon className="card-icon" /> */}
            <Box component="i" className="card-icon icon-basic-compass"></Box>
            <Typography variant="h6" component="h6">
              Meet nature
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="card">
            {/* <MapOutlinedIcon className="card-icon" /> */}
            <Box component="i" className="card-icon icon-basic-map"></Box>
            <Typography variant="h6" component="h6">
              Find your way
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="card">
            <Box component="i" className="card-icon icon-basic-heart"></Box>
            <Typography variant="h6" component="h6">
              Live a healthier life
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
