import { useState } from 'react';
import {
  // Bottom Navigation components
  BottomNavigation,
  BottomNavigationAction,
  
  // Breadcrumbs
  Breadcrumbs,
  
  // Drawer components
  Drawer,
  
  // Link
  Link,
  
  // Menu components
  Menu,
  MenuItem,
  
  // Pagination
  Pagination,
  PaginationItem,
  
  // Speed Dial
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  
  // Stepper components
  Stepper,
  Step,
  StepLabel,
  StepContent,
  
  // Tabs components
  Tabs,
  Tab,
  
  // Other MUI components
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';

// Icons
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationExample = () => {
  // Bottom Navigation state
  const [bottomNavValue, setBottomNavValue] = useState(0);
  
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  
  // Pagination state
  const [page, setPage] = useState(1);
  
  // Stepper state
  const [activeStep, setActiveStep] = useState(0);
  
  // Tabs state
  const [tabValue, setTabValue] = useState(0);

  // Handle menu open
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Steps for stepper
  const steps = [
    {
      label: 'Select campaign settings',
      description: 'Select campaign settings based on your needs.',
    },
    {
      label: 'Create an ad group',
      description: 'Create an ad group to group your ads.',
    },
    {
      label: 'Create an ad',
      description: 'Create an ad to promote your product or service.',
    },
  ];

  // Handle stepper next
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Handle stepper back
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Handle stepper reset
  const handleReset = () => {
    setActiveStep(0);
  };

  // Speed dial actions
  const speedDialActions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        MUI Navigation Components
      </Typography>

      {/* Bottom Navigation */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Bottom Navigation
      </Typography>
      <Paper sx={{ width: '100%', maxWidth: 500 }}>
        <BottomNavigation
          value={bottomNavValue}
          onChange={(event, newValue) => {
            setBottomNavValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Selected navigation: {bottomNavValue === 0 ? 'Recents' : bottomNavValue === 1 ? 'Favorites' : 'Location'}
      </Typography>

      {/* Breadcrumbs */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Breadcrumbs
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="#"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="#"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Components
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Navigation
        </Typography>
      </Breadcrumbs>

      {/* Drawer */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Drawer
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => setDrawerOpen(true)}
        startIcon={<MenuIcon />}
      >
        Open Drawer
      </Button>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button startIcon={<HomeIcon />}>Home</Button>
            <Button startIcon={<FavoriteIcon />}>Favorites</Button>
            <Button startIcon={<RestoreIcon />}>Recent</Button>
            <Button startIcon={<LocationOnIcon />}>Location</Button>
          </Box>
        </Box>
      </Drawer>

      {/* Menu */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Menu
      </Typography>
      <Button
        variant="contained"
        onClick={handleMenuClick}
        aria-controls={menuOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      {/* Pagination */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Pagination
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" gutterBottom>
          Current page: {page}
        </Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
          showFirstButton
          showLastButton
          sx={{ mb: 2 }}
        />
        <Pagination
          count={10}
          color="secondary"
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: RestoreIcon, next: FavoriteIcon }}
              {...item}
            />
          )}
        />
      </Box>

      {/* Speed Dial */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Speed Dial
      </Typography>
      <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1, position: 'relative' }}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {speedDialActions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>

      {/* Stepper */}
      <Typography variant="h5" gutterBottom sx={{ mt: 8 }}>
        Stepper
      </Typography>
      <Box sx={{ maxWidth: 500 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2, mt: 1 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>

      {/* Tabs */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Tabs
      </Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs 
          value={tabValue} 
          onChange={(event, newValue) => setTabValue(newValue)}
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && <Box>Item One Content</Box>}
          {tabValue === 1 && <Box>Item Two Content</Box>}
          {tabValue === 2 && <Box>Item Three Content</Box>}
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationExample;