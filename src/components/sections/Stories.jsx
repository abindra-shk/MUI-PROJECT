import { Box, Typography, Paper, Grid } from '@mui/material';

function Stories() {
  const stories = [
    { title: 'Story 1', content: 'Content of Story 1' },
    { title: 'Story 2', content: 'Content of Story 2' },
    { title: 'Story 3', content: 'Content of Story 3' },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Stories
      </Typography>
      <Grid container spacing={4}>
        {stories.map((story, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h5" gutterBottom>
                {story.title}
              </Typography>
              <Typography variant="body2">{story.content}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Stories;
