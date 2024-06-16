import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
// Import your existing SCSS

const Stories = () => {
  return (
    <Box component="section" id="stories" className="section-stories">
      <Container className="container" disableGutters='true'>
        <Box className="bg-video">
          <video className="bg-video-content" autoPlay muted loop>
            <source src="./videos/video.mp4" type="video/mp4" />
            <source src="./videos/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </Box>
        <Typography variant="h4" className="heading">
          We make people genuinely happy
        </Typography>
        <Box className="column">
          <div className="story">
            <figure className="story-figure">
              <img
              
                src="/images/nat-8.jpg"
                alt="Person on a tour"
                className="story-figure-img"
              />
              <figcaption className="story-figure-caption">
                Mary Smith
              </figcaption>
            </figure>
            <CardContent className="story-text">
              <Typography
                variant="h5"
                component="h3"
                className="story-text-heading"
              >
                I had the best week ever with my family
              </Typography>
              <Typography variant="body1" className="story-text-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum.
              </Typography>
            </CardContent>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Stories;
