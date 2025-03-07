import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function RobotoFontExample() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>
          Roboto Font Example
        </Typography>
        
        <Typography variant="h4" fontWeight={300} gutterBottom>
          Light (300) - The quick brown fox
        </Typography>
        
        <Typography variant="h4" fontWeight={400} gutterBottom>
          Regular (400) - The quick brown fox
        </Typography>
        
        <Typography variant="h4" fontWeight={500} gutterBottom>
          Medium (500) - The quick brown fox
        </Typography>
        
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Bold (700) - The quick brown fox
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            This is a regular paragraph using Roboto font. Material-UI uses Roboto as its default font.
            The font is clean, modern, and highly readable across different sizes and weights.
          </Typography>
          
          <Typography variant="body2">
            This is a smaller text variant (body2) also using Roboto font, commonly used for secondary text.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}