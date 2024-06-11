import {
  Box,
  Container,
  Link,
  Checkbox,
  FormControlLabel,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../assets/images/logo-white.png';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen,setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Box component="header" className="header">
      <Container maxWidth="xl" disableGutters>
        <Box className="nav-bar">
          <Box className="logo-box">
            <Box
              component="img"
              className="logo"
              sx={{
                padding: 0,
                marginLeft: 1,
                maxHeight: { xs: 35, md: 35 },
                maxWidth: { xs: '100%', md: '100%' },
              }}
              alt="Logo"
              src={logo}
            />
          </Box>
          {/* Menu Toggle for Mobile View */}
          {/* <input type="checkbox" className="menu-toggle" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <span className="material-symbols-outlined menu-icon-open">
              menu
            </span>
            <span className="material-symbols-outlined menu-icon-close">
              close
            </span>
          </label> */}
           <FormControlLabel
            control={<Checkbox className="menu-toggle" id="menu-toggle" />}
            label={
              <IconButton
                component="label"
                htmlFor="menu-toggle"
                className="menu-icon"
              >
                <MenuIcon className={isMenuOpen ? 'menu-icon-close' : 'menu-icon-open'} />
                <CloseIcon className={isMenuOpen ? 'menu-icon-open' : 'menu-icon-close'} />
              </IconButton>
            }
            onChange={toggleMenu}
          />
          <Box component="ul" className='nav-items'>
            <Box component="li" className="nav-item">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </Box>
            <Box component="li" className="nav-item">
              <Link href="#features" className="nav-link">
                Features
              </Link>
            </Box>
            <Box component="li" className="nav-item dropdown">
              <Link href="#tours" className="nav-link drop-btn">
                Tours
                <ArrowDropDownIcon />
              </Link>
              <Box component="ul" className="dropdown-content">
                {/* Nested Dropdown Items */}
                <Box component="li" className="dropdown-item">
                  <Link href="#" className="nav-link">
                    Europe
                  </Link>
                  <Box component="ul" className="dropdown-content">
                    <Box component="li" className="dropdown-item">
                      <Link href="#" className="nav-link">
                        France
                      </Link>
                      <Box component="ul" className="dropdown-content">
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Paris
                          </Link>
                        </Box>
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Nice
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="li" className="dropdown-item">
                      <Link href="#" className="nav-link">
                        Italy
                      </Link>
                      <Box component="ul" className="dropdown-content">
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Rome
                          </Link>
                        </Box>
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Venice
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box component="li" className="dropdown-item">
                  <Link href="#" className="nav-link">
                    Asia
                  </Link>
                  <Box component="ul" className="dropdown-content">
                    <Box component="li" className="dropdown-item">
                      <Link href="#" className="nav-link">
                        Japan
                      </Link>
                      <Box component="ul" className="dropdown-content">
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Tokyo
                          </Link>
                        </Box>
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Kyoto
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="li" className="dropdown-item">
                      <Link href="#" className="nav-link">
                        China
                      </Link>
                      <Box component="ul" className="dropdown-content">
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Beijing
                          </Link>
                        </Box>
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Shanghai
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="li" className="dropdown-item">
                      <Link href="#" className="nav-link">
                        South Asia
                      </Link>
                      <Box component="ul" className="dropdown-content">
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            India
                          </Link>
                          <Box component="ul" className="dropdown-content">
                            <Box component="li" className="dropdown-item">
                              <Link href="#" className="nav-link">
                                Delhi
                              </Link>
                            </Box>
                            <Box component="li" className="dropdown-item">
                              <Link href="#" className="nav-link">
                                Mumbai
                              </Link>
                            </Box>
                            <Box component="li" className="dropdown-item">
                              <Link href="#" className="nav-link">
                                Bangalore
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                        <Box component="li" className="dropdown-item">
                          <Link href="#" className="nav-link">
                            Pakistan
                          </Link>
                          <Box component="ul" className="dropdown-content">
                            <Box component="li" className="dropdown-item">
                              <Link href="#" className="nav-link">
                                Karachi
                              </Link>
                            </Box>
                            <Box component="li" className="dropdown-item">
                              <Link href="#" className="nav-link">
                                Lahore
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box component="li" className="nav-item">
              <Link href="#stories" className="nav-link">
                Stories
              </Link>
            </Box>
          </Box>
          <Box className={isMenuOpen ? 'navigation-background navigation-background-open' : 'navigation-background'}></Box>
          <Box component="ul" className={isMenuOpen ? 'nav-items-mobile nav-items-mobile-open' : 'nav-items-mobile-closed'}>
            <Box component="li" className="nav-item">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </Box>
            <Box component="li" className="nav-item">
              <Link href="#features" className="nav-link">
                Features
              </Link>
            </Box>
            <Box component="li" className="nav-item">
              <Link href="#tours" className="nav-link">
                Tours
              </Link>
            </Box>
            <Box component="li" className="nav-item">
              <Link href="#stories" className="nav-link">
                Stories
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
