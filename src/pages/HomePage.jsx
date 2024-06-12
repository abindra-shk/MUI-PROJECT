import {
  Container,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
// import About from '../components/sections/About';
// import Features from '../components/sections/Features';
// import Tours from '../components/sections/Tours';
// import Stories from '../components/sections/Stories';
// import Banner from '../components/sections/Banner';
// import SearchAppBar from '../layout/Header';
import Header from '../layout/Header';
import Banner from '../components/sections/Banner';
// import { useState } from 'react';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

function HomePage() {
  // const [checked, setChecked] = useState(false);

  // const handleCheckboxChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <Container maxWidth="xl" disableGutters="true">
      <Header />
      <Banner/>
      <Box
        sx={{
          display: 'flex',
          height: '80vh',
          backgroundColor: 'secondary.light',
          color: 'black',
          padding: '16px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        This is a styled box.
      </Box>
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox className="menu-toggle" />}
            label="Label"
          />
        </FormGroup>
        <Box
          height={200}
          width={200}
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
          p={2}
          className="test-box"
        >
          This Box uses MUI System props for quick customization.
        </Box>
      </div>

      {/* <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>

        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'medium',
            mx: 0.5,
          }}
        >
          18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
          vs. last week
        </Box>
      </Box> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 10,
          overflow: 'clip',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="../assets/images/logo-white.png"
        />
        <Box
          sx={{
            p: 3,
            minWidth: { md: 350 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 0.5,
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
          >
            123 Main St, Phoenix AZ
          </Box>
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            $280,000 — $310,000
          </Box>
          <Box
            sx={{
              py: 0.5,
              px: 1,
              backgroundColor: 'rgba(46, 125, 50, 0.1)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              border: '1px solid',
              borderColor: 'rgba(46, 125, 50, 0.1)',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              letterSpacing: '.05rem',
              textTransform: 'uppercase',
              color: 'success.main',
            }}
          >
            Confidence score: 85%
          </Box>
        </Box>
      </Box>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        This Box renders as an HTML section element.
      </Box>
      {/* <Typography variant="h1" component="h2">
        h1. Heading
      </Typography> */}
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Responsive h3</Typography>
      </ThemeProvider>
      {/* <Box mt={4}>
        <Banner />
      </Box>
      <Box mt={4}>
        <About />
      </Box>
      <Box mt={4}>
        <Features />
      </Box>
      <Box mt={4}>
        <Tours />
      </Box>
      <Box mt={4}>
        <Stories />
      </Box> */}
    </Container>
  );
}

export default HomePage;
