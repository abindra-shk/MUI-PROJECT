import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';

function Tours() {
  const tours = [
    {
      title: 'Tour 1',
      description: 'Description of Tour 1',
      image: '/path/to/image1.jpg',
    },
    {
      title: 'Tour 2',
      description: 'Description of Tour 2',
      image: '/path/to/image2.jpg',
    },
    {
      title: 'Tour 3',
      description: 'Description of Tour 3',
      image: '/path/to/image3.jpg',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Tours
      </Typography>
      <Grid container spacing={4}>
        {tours.map((tour, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={tour.image}
                alt={tour.title}
              />
              <CardContent>
                <Typography variant="h5">{tour.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {tour.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Tours;
