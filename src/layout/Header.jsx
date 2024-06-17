// 


import {
  Box,
  Link,
  Checkbox,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '/images/logo-white.png';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Box component="header" className="header">
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

        <FormControlLabel
          control={<Checkbox className="menu-toggle" id="menu-toggle" />}
          label={
            <IconButton
              component="label"
              htmlFor="menu-toggle"
              className="menu-icon"
            >
              <MenuIcon
                className={isMenuOpen ? 'menu-icon-close' : 'menu-icon-open'}
              />
              <CloseIcon
                className={isMenuOpen ? 'menu-icon-open' : 'menu-icon-close'}
              />
            </IconButton>
          }
          onChange={toggleMenu}
        />

        <List className="nav-items">
          <ListItem component="li" className="nav-item">
            <Link href="#about" className="nav-link">
              About
            </Link>
          </ListItem>
          <ListItem component="li" className="nav-item">
            <Link href="#features" className="nav-link">
              Features
            </Link>
          </ListItem>
          <ListItem component="li" className="nav-item dropdown">
            <Link href="#tours" className="nav-link drop-btn">
              Tours
              <ArrowDropDownIcon />
            </Link>
            <List className="dropdown-content">
              <ListItem component="li" className="dropdown-item">
                <Link href="#" className="nav-link">
                  Europe
                </Link>
                <List className="dropdown-content">
                  <ListItem component="li" className="dropdown-item">
                    <Link href="#" className="nav-link">
                      France
                    </Link>
                    <List className="dropdown-content">
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Paris
                        </Link>
                      </ListItem>
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Nice
                        </Link>
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem component="li" className="dropdown-item">
                    <Link href="#" className="nav-link">
                      Italy
                    </Link>
                    <List className="dropdown-content">
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Rome
                        </Link>
                      </ListItem>
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Venice
                        </Link>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem component="li" className="dropdown-item">
                <Link href="#" className="nav-link">
                  Asia
                </Link>
                <List className="dropdown-content">
                  <ListItem component="li" className="dropdown-item">
                    <Link href="#" className="nav-link">
                      Japan
                    </Link>
                    <List className="dropdown-content">
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Tokyo
                        </Link>
                      </ListItem>
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Kyoto
                        </Link>
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem component="li" className="dropdown-item">
                    <Link href="#" className="nav-link">
                      China
                    </Link>
                    <List className="dropdown-content">
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Beijing
                        </Link>
                      </ListItem>
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Shanghai
                        </Link>
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem component="li" className="dropdown-item">
                    <Link href="#" className="nav-link">
                      South Asia
                    </Link>
                    <List className="dropdown-content">
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          India
                        </Link>
                        <List className="dropdown-content">
                          <ListItem component="li" className="dropdown-item">
                            <Link href="#" className="nav-link">
                              Delhi
                            </Link>
                          </ListItem>
                          <ListItem component="li" className="dropdown-item">
                            <Link href="#" className="nav-link">
                              Mumbai
                            </Link>
                          </ListItem>
                          <ListItem component="li" className="dropdown-item">
                            <Link href="#" className="nav-link">
                              Bangalore
                            </Link>
                          </ListItem>
                        </List>
                      </ListItem>
                      <ListItem component="li" className="dropdown-item">
                        <Link href="#" className="nav-link">
                          Pakistan
                        </Link>
                        <List className="dropdown-content">
                          <ListItem component="li" className="dropdown-item">
                            <Link href="#" className="nav-link">
                              Karachi
                            </Link>
                          </ListItem>
                          <ListItem component="li" className="dropdown-item">
                            <Link href="#" className="nav-link">
                              Lahore
                            </Link>
                          </ListItem>
                        </List>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </ListItem>
          <ListItem component="li" className="nav-item">
            <Link href="#stories" className="nav-link">
              Stories
            </Link>
          </ListItem>
        </List>
        <Box
          className={
            isMenuOpen
              ? 'navigation-background navigation-background-open'
              : 'navigation-background'
          }
        ></Box>
        <List
          className={
            isMenuOpen
              ? 'nav-items-mobile nav-items-mobile-open'
              : 'nav-items-mobile-closed'
          }
        >
          <ListItem component="li" className="nav-item">
            <Link href="#about" className="nav-link">
              About
            </Link>
          </ListItem>
          <ListItem component="li" className="nav-item">
            <Link href="#features" className="nav-link">
              Features
            </Link>
          </ListItem>
          <ListItem component="li" className="nav-item">
            <Link href="#tours" className="nav-link">
              Tours
            </Link>
          </ListItem>
          <ListItem component="li" className="nav-item">
            <Link href="#stories" className="nav-link">
              Stories
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Header;
