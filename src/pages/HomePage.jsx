import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Header from "../layout/Header";
import Banner from "../components/sections/Banner";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Tours from "../components/sections/Tours";
import Stories from "../components/sections/Stories";
import ActionAreaCard from "../components/card";
import Footer from "../layout/Footer";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <Tours />
      <Stories />
      <ActionAreaCard />
      <Footer />
    </>
  );
}

export default HomePage;
