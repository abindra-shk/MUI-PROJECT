
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Box className="footer-logo-box">
        <img
          src="/images/logo-green-2x.png"
          alt="Full logo"
          className="footer-logo"
        />
      </Box>
      <Typography className="name">
        Design: Jonas Schmedtmann <br />
        Modified by: Abindra
      </Typography>
    </Box>
  );
};

export default Footer;
