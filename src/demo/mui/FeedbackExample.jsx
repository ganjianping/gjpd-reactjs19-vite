import { useState } from 'react';
import { 
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Skeleton,
  Snackbar,
  Stack,
  Typography 
} from '@mui/material';

const FeedbackExample = () => {
  const [open, setOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };

  const handleBackdropOpen = () => {
    setBackdropOpen(true);
    setTimeout(() => {
      setBackdropOpen(false);
    }, 2000);
  };

  // Toggle loading state for skeleton
  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        MUI Feedback Components
      </Typography>

      {/* Alerts Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Alerts
      </Typography>
      <Stack spacing={2}>
        <Box>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>
        </Box>
        <Box>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — check it out!
          </Alert>
        </Box>
        <Box>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — check it out!
          </Alert>
        </Box>
        <Box>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
          </Alert>
        </Box>
      </Stack>

      {/* Backdrop Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Backdrop
      </Typography>
      <Button onClick={handleBackdropOpen}>Show Backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={handleBackdropClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Skeleton Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Skeleton
      </Typography>
      <Button onClick={toggleLoading} sx={{ mb: 2 }}>
        Toggle Loading State
      </Button>
      <Box sx={{ width: '100%' }}>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ) : (
          <Stack spacing={1}>
            <Typography>Your content is loaded!</Typography>
            <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.main' }} />
            <Box sx={{ width: 210, height: 60, bgcolor: 'secondary.main' }} />
            <Box sx={{ width: 210, height: 60, bgcolor: 'success.main', borderRadius: 1 }} />
          </Stack>
        )}
      </Box>

      {/* Snackbar Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Snackbar
      </Typography>
      <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="This is a snackbar message"
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            CLOSE
          </Button>
        }
      />
    </Box>
  );
};

export default FeedbackExample;