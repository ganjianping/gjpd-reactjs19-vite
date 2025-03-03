import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { menuItems } from './menu.json';

export function MainMenu() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState({});
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileSubMenuOpen('');
  };

  const handleOpenSubMenu = (event, label) => {
    event.stopPropagation();
    setAnchorElSubMenu(prev => ({
      ...prev,
      [label]: event.currentTarget
    }));
  };

  const handleCloseSubMenu = (label) => {
    setAnchorElSubMenu(prev => ({
      ...prev,
      [label]: null
    }));
  };

  const handleMobileMenuItemClick = (item) => {
    if (item.children) {
      setMobileSubMenuOpen(prev => prev === item.label ? '' : item.label);
    } else if (item.url) {
      if (item.isExternal) {
        window.open(item.url, '_blank');
      } else {
        navigate(item.url);
      }
      handleCloseNavMenu();
    }
  };

  const handleMenuItemClick = (item) => {
    if (!item.children && item.url) {
      if (item.isExternal) {
        window.open(item.url, '_blank');
      } else {
        navigate(item.url);
      }
      handleCloseNavMenu();
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            DEMO
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuItems.map((item) => (
                <Box key={item.label}>
                  <MenuItem 
                    onClick={() => handleMobileMenuItemClick(item)}
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '200px'
                    }}
                  >
                    <Typography>{item.label}</Typography>
                    {item.children && (
                      <KeyboardArrowDownIcon 
                        sx={{ 
                          transform: mobileSubMenuOpen === item.label ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s'
                        }}
                      />
                    )}
                  </MenuItem>
                  {item.children && mobileSubMenuOpen === item.label && (
                    <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)', pl: 2 }}>
                      {item.children.map((child) => (
                        <MenuItem
                          key={child.label}
                          onClick={() => handleMenuItemClick(child)}
                          sx={{ minWidth: '200px' }}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Menu>
          </Box>

          {/* Mobile logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            GJP DEMO
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Box key={item.label}>
                <Button
                  onClick={(e) => item.children ? handleOpenSubMenu(e, item.label) : handleMenuItemClick(item)}
                  sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
                >
                  {item.label}
                  {item.children && <KeyboardArrowDownIcon />}
                </Button>
                {item.children && (
                  <Menu
                    anchorEl={anchorElSubMenu[item.label]}
                    open={Boolean(anchorElSubMenu[item.label])}
                    onClose={() => handleCloseSubMenu(item.label)}
                  >
                    {item.children.map((child) => (
                      <MenuItem
                        key={child.label}
                        onClick={() => {
                          handleMenuItemClick(child);
                          handleCloseSubMenu(item.label);
                        }}
                      >
                        {child.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}