import { Box, Typography, Grid } from '@mui/material';

function Features() {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h6">Feature 1</Typography>
            <Typography variant="body1">Description of Feature 1.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h6">Feature 2</Typography>
            <Typography variant="body1">Description of Feature 2.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h6">Feature 3</Typography>
            <Typography variant="body1">Description of Feature 3.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Features;
