import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  styled,
} from '@mui/material';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const Stories = () => {
  return (
    <Box component="section" id="stories" className="section-stories">
      <Container className="container" disableGutters>
        <Box className="bg-video">
          <video className="bg-video-content" autoPlay muted loop>
            <source src="./videos/video.mp4" type="video/mp4" />
            <source src="./videos/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </Box>
        <Typography variant="h4">We make people genuinely happy</Typography>
        <Box className="column">
          <Card className="story">
            <Box className="story-figure">
              <CardMedia
                component="img"
                src="/images/nat-8.jpg"
                alt="Person on a tour"
                className="story-figure-img"
              />
              <Typography className="story-figure-caption">
                Mary Smith
              </Typography>
            </Box>
            <CardContentNoPadding className="story-text">
              <Typography variant="h6">
                I had the best week ever with my family
              </Typography>
              <Typography variant="body1" gutterBottom="false">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem.
              </Typography>
            </CardContentNoPadding>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Stories;
